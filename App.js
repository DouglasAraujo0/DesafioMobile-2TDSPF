import { View, Text, StatusBar, StyleSheet, Image, SafeAreaView, ScrollView, Platform } from 'react-native';
import 'react-native-gesture-handler';

const DougGymApp = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#333237" />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('./assets/academia.png')} style={styles.logoImage} />
            <Text style={styles.welcomeText}>DOUG GYM</Text>
          </View>
          <Text style={styles.subText}>
            Bem-vindo à Doug Gym! Transformando Vidas, Moldando Corpos! Se você está buscando uma jornada de transformação pessoal, bem-estar e condicionamento físico, você chegou ao lugar certo. Na Doug Gym, vamos esculpir corpos e também criar uma comunidade maravilhosa! Logo abaixo vocês podem encontrar algumas informações da nossa academia...
          </Text>
          <View style={styles.rowContainer}>
            <Text style={styles.textAboveImages}>
              PREÇOS E PLANOS
            </Text>
            <Image source={require('./assets/arnold.jpeg')} style={styles.image} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.textAboveImages}>
              ÁREA DO CLIENTE
            </Text>
            <Image source={require('./assets/platz.jpeg')} style={styles.image} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.textAboveImages}>
              DIVISÕES DE TREINO
            </Text>
            <Image source={require('./assets/images.jpeg')} style={styles.image} />
          </View>
          <View style={styles.rowContainer}>
            <Text style={styles.textAboveImages}>
              TODOS OS EQUIPAMENTOS
            </Text>
            <Image source={require('./assets/levrone.jpeg')} style={styles.image} />
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © 2024 Doug Gym
          </Text>
          <Text style={styles.footerText}>
            Feito por Douglas Magalhães de Araujo RM552008
          </Text>
          <View style={styles.footerIcons}>
            <Image source={require('./assets/instagram.png')} style={styles.footerIcon} />
            <Image source={require('./assets/whatsapp.png')} style={styles.footerIcon} />
            <Image source={require('./assets/twitter.png')} style={styles.footerIcon} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#333237',
    paddingTop: Platform.OS === 'ios' ? 20 : 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#E9E2DA',
    padding: 20,
  },
  header: {
    backgroundColor: '#333237',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: Platform.OS === 'ios' ? 20 : 20,
    borderRadius: 25,
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginTop: 10,
  },
  subText: {
    fontSize: 16,
    color: '#7f8c8d',
    marginTop: 15,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  image: {
    width: 125,
    height: 125,
    marginBottom: 10,
    borderRadius: 25,
  },
  textAboveImages: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333237',
    marginBottom: 10,
    textAlign: 'center',
  },
  scrollContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: '#333237',
    padding: 10,
    alignItems: 'center',
  },
  footerText: {
    color: '#ffffff',
    textAlign: 'center',
  },
  footerIcons: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
  },
  footerIcon: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
  },
});

export default DougGymApp;
