from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

from django.contrib.auth.models import User
from .models import Feeds

from .serializers import FeedsSerializer

def home(request):
    feeds = Feeds.objects.all()

    return render(request, 'feeds/pages/feeds.html', context={ 'feeds': feeds })

def contato(request):
    return render(request, 'feeds/pages/contato.html')

# METODOS HTTP ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
@api_view(http_method_names=['GET', 'POST'])
def feeds(request):
    if request.method == 'GET':
        feeds = Feeds.objects.all()
        serializer = FeedsSerializer(instance=feeds, many=True)
        return Response(serializer.data)
    
    if request.method == 'POST':
        serializer = FeedsSerializer(data=request.data)
        
        serializer.is_valid(raise_exception=True)

        if request.data['author']:
            if User.objects.filter(pk=request.data['author']).exists():
                serializer.save(author_id=request.data['author'])

                return Response(serializer.validated_data)
            else:
                return Response(
                    'Erro ao cadastrar um feed, usuário não identificado',
                    status=status.HTTP_400_BAD_REQUEST
                )
        else:
            return Response(
                'O campo author é requerido',
                status=status.HTTP_400_BAD_REQUEST
            )