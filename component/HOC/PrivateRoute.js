import { useRouter } from 'next/router';
import { getLocalStorageData } from '../../utils/localStorage/localStorageData';

const PrivateRoute = ({ children }) => {
    const router = useRouter();
    const loginCred = getLocalStorageData("profile");

    console.log(loginCred);
    if (Object.keys(loginCred).length === 0) {
        router.replace('/sign-in');
    } else {
        return children;
    }
}

export default PrivateRoute