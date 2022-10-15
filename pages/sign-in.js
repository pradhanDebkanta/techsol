import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import homeCss from '../assets/css/home.module.css';
import signCss from '../assets/css/signIn.module.css';
import { getLocalStorageData, setLocalStorageData } from '../utils/localStorage/localStorageData';
import { keepLogin, newLogin } from '../action/auth/loginUser';

const GAuthInitializer = dynamic(() => import('../component/HOC/GAuthInitializer'), { ssr: false })
const SignInWithGoogle = dynamic(() => import('../component/auth/SignInWithGoogle'), { ssr: false });


const SignIn = () => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = getLocalStorageData('profile');
    // console.log(accessToken)
    if (accessToken?.tkd) {
      keepLogin(accessToken.tkd).then(res => {
        // console.log(res);
        if (res) {
          router.replace('/');
        } else {
          setLoading(false);
        }
      })
    } else {
      setLoading(false);
    }

  }, [])

  const handleSignIn = async tokenId => {
    //send id to backend
    console.log(tokenId);
    const accessToken = await newLogin(tokenId);
    setLocalStorageData('profile', { tkd: accessToken });
    // later i redirect to specific page by using router.nextPage
    router.replace('/');
  }
  return (
    <>{isLoading ? (
      <div>Loading...</div>
    ) : (
      <Flex
        minH={'60vh'}
        justify={'center'}
      >
        <Box
          w={'95%'}
          borderRadius={'8px'}
          mt={'50px'}
          pt={'20px'}
          boxShadow={"rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"}
          className={signCss.box}
        >
          <Flex justify={'center'} mb={'40px'} >
            <Text fontSize={'40px'} fontWeight={600} color={'var(--chakra-colors-twitter-500)'} className={`${homeCss.responsiveHeading} ${signCss.headertext}`}>Sign In</Text>
          </Flex>
          <Flex justify={'center'} w={'290px'} ml={'auto'} mr={'auto'}>
            <GAuthInitializer>
              <SignInWithGoogle
                onSignIn={(token) => {
                  handleSignIn(token);
                }}
                buttonText="Sign In with Google"
              />
            </GAuthInitializer>
          </Flex>
        </Box>
      </Flex>
    )}
    </>
  )
}

export default SignIn