import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import * as Keychain from 'react-native-keychain';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from 'navigation/RootNavigator';
import { Button, Divider, Input, TextButton } from 'components';
import { Facebook, IGLogo } from 'assets/icons';
import { palette, spacing } from 'theme';
import { emailValidate } from 'utils';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const insets = useSafeAreaInsets();

  const storeCredentials = async () => {
    await Keychain.setGenericPassword(email, password);
  };

  const login = () => {
    if (email.length === 0 && password.length === 0) {
      Alert.alert(
        'Email and Password',
        'Please check your email and password!',
      );
      return;
    }

    if (emailValidate(email) && password.length > 5) {
      storeCredentials();
      navigation.navigate('Main');
    } else if (!emailValidate(email) && password.length < 6) {
      Alert.alert(
        'Invalid email and password',
        'Please check your email and password!',
      );
    } else if (!emailValidate(email)) {
      Alert.alert('Invalid email', 'Please check your email!');
    } else if (password.length < 5) {
      Alert.alert(
        'Invalid password',
        'Password must be at least 6 character. Please check!',
      );
    }
  };

  return (
    <View style={styles.container}>
      <IGLogo size="big" style={styles.logo} />
      <View style={styles.content}>
        <View style={styles.contentTop}>
          <Input
            type="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
          />

          <Input
            type="password"
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          />

          <TextButton
            title="Forgot password?"
            onPress={() => {}}
            style={{ alignSelf: 'flex-end' }}
          />

          <Button title="Log in" onPress={login} />
        </View>

        <View style={styles.contentBottom}>
          <TextButton
            title="Log in with Facebook?"
            leftComponent={<Facebook />}
            onPress={() => {}}
          />

          <Divider title="OR" />

          <View style={styles.dontAccountTextContainer}>
            <Text style={styles.dontAccountText}>Don’t have an account? </Text>
            <TextButton title="Sign up." onPress={() => {}} />
          </View>
        </View>
      </View>

      <View style={[styles.footer, { marginBottom: insets.bottom }]}>
        <Text style={styles.footerText}>Instagram of Meta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginBottom: spacing.small,
  },
  content: {
    width: '100%',
    paddingHorizontal: spacing.medium,
  },
  contentTop: {
    gap: spacing.small,
    marginTop: spacing.large,
    marginBottom: spacing.extraLarge,
  },
  contentBottom: {
    gap: spacing.extraLarge,
  },
  dontAccountTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dontAccountText: {
    color: palette.black40,
  },
  footer: {
    width: '100%',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    borderTopWidth: 0.3,
    borderTopColor: palette.black40,
  },
  footerText: {
    color: palette.black40,
  },
});

export default LoginScreen;
