import { StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView} from 'react-native'
import { Feather, FontAwesome5, AntDesign } from '@expo/vector-icons';
  import React from 'react'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'


const SignInScreen = () => {
  const [email,setEmail] = useState('abcd@gmail.com')
  const [password,setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [focusedInput, setFocusedInput] = useState('email')
  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.logoContainer}>
            <View style={styles.logoWrapper}>
              <View style={[styles.logoPill, styles.logoPillTop]} />
              <View style={[styles.logoPill, styles.logoPillBottom]} />
              <View style={[styles.logoPill, styles.logoPillLeft]} />
              <View style={[styles.logoPill, styles.logoPillRight]} />
            </View>
      </View>
 {/* Header  */}
           <View style={styles.headerContainer}>
            <Text style={styles.heading}>Sign In</Text>
            <Text style={styles.subheading}>Let's experience the joy of telecare AI.</Text>
          </View>
          {/* Form */}
          <View style={styles.formContainer}>
            <Text style={styles.inputLabel}>Email Address</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedInput === 'email' && styles.inputWrapperFocused,
              ]}
            >
              <Feather name="mail" size={20} color="#333" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email..."
                placeholderTextColor="#A0A0A0"
                value={email}
                onChangeText={setEmail}
                onFocus={() => setFocusedInput('email')}
                onBlur={() => setFocusedInput('')}
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>
            {/* Password Input */}
            <Text style={[styles.inputLabel, { marginTop: 20 }]}>Password</Text>
            <View
              style={[
                styles.inputWrapper,
                focusedInput === 'password' && styles.inputWrapperFocused,
              ]}
            >
              <Feather name="lock" size={20} color="#333" style={styles.inputIcon} />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your password..."
                placeholderTextColor="#A0A0A0"
                value={password}
                onChangeText={setPassword}
                onFocus={() => setFocusedInput('password')}
                onBlur={() => setFocusedInput('')}
                secureTextEntry={!isPasswordVisible}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                style={styles.eyeIcon}
              >
                <Feather
                  name={isPasswordVisible ? 'eye' : 'eye-off'}
                  size={20}
                  color="#A0A0A0"
                />
              </TouchableOpacity>
            </View>

            {/* Sign In Button */}
            <TouchableOpacity style={styles.signInButton} activeOpacity={0.8}>
              <Text style={styles.signInButtonText}>Sign In</Text>
              <AntDesign name="arrowright" size={20} color="#FFF" style={{ marginLeft: 8 }} />
            </TouchableOpacity>
          </View>

          {/* Social Logins */}
          <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="facebook-f" size={20} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <FontAwesome5 name="google" size={20} color="#333" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <AntDesign name="instagram" size={24} color="#333" />
            </TouchableOpacity>
          </View>

          {/* Footer Links */}
          <View style={styles.footerContainer}>
            <View style={styles.signUpRow}>
              <Text style={styles.footerText}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.linkText}>Sign Up.</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.linkText}>Forgot your password?</Text>
            </TouchableOpacity>
          </View>
          

        </ScrollView>

      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default SignInScreen

const BRAND_COLOR = '#88C222';
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8F9FA', // Light greyish-white background
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
  },
  // Custom Logo Styles using core Views
  logoContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  logoWrapper: {
    width: 44,
    height: 44,
    position: 'relative',
  },
  logoPill: {
    backgroundColor: BRAND_COLOR,
    position: 'absolute',
    borderRadius: 10,
  },
  logoPillTop: { top: 0, left: 14, width: 16, height: 20 },
  logoPillBottom: { bottom: 0, left: 14, width: 16, height: 20 },
  logoPillLeft: { left: 0, top: 14, width: 20, height: 16 },
  logoPillRight: { right: 0, top: 14, width: 20, height: 16 },
  
  headerContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  heading: {
    fontSize: 32,
    fontWeight: '800',
    color: '#333333',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 15,
    color: '#777777',
    fontWeight: '400',
  },
  formContainer: {
    width: '100%',
    marginBottom: 40,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#333333',
    marginBottom: 8,
    marginLeft: 4,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
    paddingHorizontal: 16,
    height: 56,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2, // for android
  },
  inputWrapperFocused: {
    borderColor: BRAND_COLOR,
  },
  inputIcon: {
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#333333',
    height: '100%',
  },
  eyeIcon: {
    padding: 4,
  },
  signInButton: {
    backgroundColor: BRAND_COLOR,
    borderRadius: 16,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    shadowColor: BRAND_COLOR,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '700',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#EAEAEA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  footerContainer: {
    alignItems: 'center',
  },
  signUpRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  footerText: {
    fontSize: 14,
    color: '#777777',
  },
  linkText: {
    fontSize: 14,
    color: BRAND_COLOR,
    fontWeight: '600',
  },
  forgotPasswordButton: {
    paddingVertical: 4,
  },
})