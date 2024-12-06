import createMiddleware from 'next-intl/middleware';
import {routing} from '../src/i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {  
  matcher: ['/', '/(ua|en)/:path*']
};

// import createMiddleware from 'next-intl/middleware';
// import { routing } from '../src/i18n/routing'; 

// export default createMiddleware(routing);

// export const config = {  
//   matcher: ['/((?!api|_next|static|favicon.ico).*)', '/(ua|en)/:path*'],
// };



