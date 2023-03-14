import { lazy } from "react";
import {Route, Routes, useLocation, Navigate} from 'react-router-dom';
import { paths, checkPathMatch } from "./helpers";

const AccountSettingsPage = lazy(() => import('pages/AccountSettingsPage'));

const PrivateRoutes: React.FC = (): JSX.Element => {
  const location = useLocation();
  const isMatch = checkPathMatch(location.pathname, paths);

  return (
    <Routes>
      <Route path={paths.accountSettings} element={<AccountSettingsPage />}/>
      <Route path='*' element={!isMatch ? <Navigate to={paths.home}/>: null}/>
    </Routes>
  )
}

export default PrivateRoutes;