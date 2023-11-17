import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export function Feed({ title, content }) {
    return (
        <View style={styles.feed_content}>
            <Text style={styles.feed_title}>
                {title}
            </Text>

            <Text style={styles.feed_content_text}>
                {content}
            </Text>

            <View style={styles.feed_actions}>
            <TouchableOpacity style={styles.btn_success}>
                <Text style={styles.btn_title}>Gostei</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.btn_danger}>
                <Text style={styles.btn_title}>Não Gostei</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    feed_content: {
      padding: 8,
      borderRadius: 4,
      backgroundColor: '#cbcbcb',
      alignItems: 'center',
      justifyContent: 'flex-start',
      gap: 16,

      marginBottom: 20,
    },
  
    feed_title: {
      fontSize: 24,
      textAlign: 'center'
    },
  
    feed_content_text: {
      fontSize: 18,
      textAlign: 'justify'
    },
  
    feed_actions: {
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'center',
      gap: 10,
    },
  
    btn_success: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#358b2e',
      padding: 10,
      borderRadius: 4
    },
  
    btn_danger: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#8b312e',
      padding: 10,
      borderRadius: 4
    },
  
    btn_title: {
      color: '#f0f0f0',
      fontWeight: 'bold',
    },
});