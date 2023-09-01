import React from 'react';  //설치한 스택 네비게이션 라이브러리 삽입
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//페이지로 만든 컴포넌트 삽입 (만든 컴포넌트 파일 위치와 파일명으로 변경)
import MainPage from '../main/MainPage';
import SignIn from '../pages/SignIn';
import NoticePage from '../pages/NoticePage';
import SignUp from '../pages/SignUp';
import TestPage from '../pages/TestPage'
import NoticeDetailScreen from '../form/NoticeDetailScreen';


//스택 네비게이션 라이브러리가 제공하는 여러 기능이 담겨있는 객체를 사용하기 위해 상단에 선언하고 시작하는게 규칙!
const Stack = createStackNavigator();

//stackNavigator 함수: 리액트의 모든 파일이 컴포넌트라 생각하고, 각 컴포넌트가 페이지 기능을 하게끔 만들어주는 함수 생성
const StackNavigator = () =>{
    return (
        //컴포넌트들을 페이지처럼 여기게끔 해주는 기능을 하는 네비게이터 태그 선언
        //위에서 선언한 const Stack = createStackNavigator();에서 Stack 변수에 들어있는 태그를 꺼내 사용
        //Stack.Navigator 태그 내부엔 페이지(화면)를 스타일링 할 수 있는 다양한 옵션이 있음 ex) screenOptions
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "whitek",
                    shadowColor: "white",
                    height:70,
                },
                headerTintColor: "black",
                headerBackTitleVisible: false,
            }}>

            {/* component={} 안에 페이지로 만들 컴포넌트를 넣음. 컴포넌트에 페이지 기능을 부여하는 코드*/}
            <Stack.Screen name="메인페이지"  component={MainPage}/>
            <Stack.Screen name='로그인페이지' component={SignIn}/>
            <Stack.Screen name='공지게시판' component={NoticePage}/>
            <Stack.Screen name='회원가입' component={SignUp}/>
            <Stack.Screen name='테스트페이지' component={TestPage}/>
            <Stack.Screen name='공지상세페이지' component={NoticeDetailScreen}/>


        </Stack.Navigator>
    )
}

//만든 스택 네비게이터를 외부에서 사용하기위해 export로 함수를 내보냄
export default StackNavigator; 

