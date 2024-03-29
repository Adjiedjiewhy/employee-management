import { Employee, Styling } from '../data/types';

export const STYLES_BUTTONS: Styling[] = [
  {
    key: 'default',
    styles:
      'rounded-md text-sm font-medium px-4 py-2 bg-black text-white items-center justify-center transition duration-300 ease-in-out hover:bg-blue-400',
  },
  {
    key: 'main',
    styles:
      'rounded-md text-sm font-medium px-4 py-2 my-5 w-full h-full bg-black text-white flex items-center justify-center transition duration-300 ease-in-out hover:bg-blue-400',
  },
  {
    key: 'main-red',
    styles:
      'rounded-md text-sm font-medium px-4 py-2 my-5 w-full h-full bg-black text-white flex items-center justify-center transition duration-300 ease-in-out hover:bg-red-400',
  },
  {
    key: 'warning',
    styles:
      'rounded-md text-sm font-medium px-4 py-2 bg-yellow-400 text-white items-center justify-center transition duration-300 ease-in-out hover:bg-yellow-600',
  },
  {
    key: 'danger',
    styles:
      'rounded-md text-sm font-medium px-4 py-2 bg-red-400 text-white items-center justify-center transition duration-300 ease-in-out hover:bg-red-600',
  },
];

export const DROPDOWNS_STATUS: String[] = [
  'Permanent',
  'Contract',
  'Outsource'
];

export const DROPDOWNS_GROUP: string[] = [
  'Business',
  'Human Resource',
  'Information Technology',
  'Operations',
  'Sales',
  'Security',
  'Legal',
  'Risk',
  'Finance',
  'Support',
];

export const EMPLOYEES: Employee[] = [
  {
    firstName: 'Simone',
    lastName: 'Dietrich',
    username: 'Simone-Dietrich',
    email: 'Rodrigo.Sawayn@yahoo.com',
    birthDate: new Date('1988-06-26T21:33:34.680Z'),
    basicSalary: 7075587.33,
    status: 'Permanent',
    group: 'Human Resource',
    description: new Date('2020-06-28T20:08:22.977Z'),
  },
  {
    firstName: 'Lucie',
    lastName: 'Schultz',
    username: 'Lucie-Schultz',
    email: 'Reyes_Lueilwitz30@gmail.com',
    birthDate: new Date('2001-01-19T16:14:10.646Z'),
    basicSalary: 7025452.558,
    status: 'Outsource',
    group: 'Sales',
    description: new Date('2019-03-06T00:54:08.418Z'),
  },
  {
    firstName: 'Cedrick',
    lastName: 'Goyette',
    username: 'Cedrick-Goyette',
    email: 'Noah.Hamill57@yahoo.com',
    birthDate: new Date('1988-03-15T06:42:38.111Z'),
    basicSalary: 7424402.356,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2006-11-03T06:27:52.378Z'),
  },
  {
    firstName: 'Hilton',
    lastName: 'Douglas',
    username: 'Hilton-Douglas',
    email: 'Guillermo.Hamill@yahoo.co.id',
    birthDate: new Date('1991-11-01T01:56:05.301Z'),
    basicSalary: 6730597.51,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2008-07-15T18:39:12.405Z'),
  },
  {
    firstName: 'Adrianna',
    lastName: 'Kertzmann',
    username: 'Adrianna-Kertzmann',
    email: 'Kendra_Bashirian53@yahoo.com',
    birthDate: new Date('2001-10-10T03:06:01.454Z'),
    basicSalary: 6443355.898,
    status: 'Contract',
    group: 'Security',
    description: new Date('2018-05-05T09:59:52.865Z'),
  },
  {
    firstName: 'Ernie',
    lastName: 'Balistreri',
    username: 'Ernie-Balistreri',
    email: 'Britney20@gmail.com',
    birthDate: new Date('1982-06-10T11:11:23.853Z'),
    basicSalary: 7064927.199,
    status: 'Permanent',
    group: 'Human Resource',
    description: new Date('2017-02-09T05:49:46.883Z'),
  },
  {
    firstName: 'Cleta',
    lastName: 'Schiller',
    username: 'Cleta-Schiller',
    email: 'Kaylah65@example.com',
    birthDate: new Date('1992-02-06T05:46:14.388Z'),
    basicSalary: 7252279.273,
    status: 'Contract',
    group: 'Finance',
    description: new Date('2007-12-23T10:03:59.933Z'),
  },
  {
    firstName: 'Tomasa',
    lastName: 'Hodkiewicz',
    username: 'Tomasa-Hodkiewicz',
    email: 'Susanna.Veum89@gmail.com',
    birthDate: new Date('1999-03-10T00:21:03.095Z'),
    basicSalary: 5387464.694,
    status: 'Outsource',
    group: 'Risk',
    description: new Date('2015-10-27T15:02:29.793Z'),
  },
  {
    firstName: 'Elvis',
    lastName: 'Gottlieb',
    username: 'Elvis-Gottlieb',
    email: 'Josiane_Vandervort71@gmail.com',
    birthDate: new Date('2001-05-21T13:03:22.806Z'),
    basicSalary: 7414972.785,
    status: 'Contract',
    group: 'Business',
    description: new Date('2021-09-28T14:53:22.781Z'),
  },
  {
    firstName: 'Estrella',
    lastName: 'Kassulke',
    username: 'Estrella-Kassulke',
    email: 'Emma_Schmidt@example.com',
    birthDate: new Date('1997-07-18T01:53:23.172Z'),
    basicSalary: 6276212.395,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2017-03-26T13:53:07.855Z'),
  },
  {
    firstName: 'Sim',
    lastName: 'Ryan',
    username: 'Sim-Ryan',
    email: 'Juanita.Moore40@yahoo.co.id',
    birthDate: new Date('1994-04-20T02:36:47.411Z'),
    basicSalary: 6001222.219,
    status: 'Outsource',
    group: 'Human Resource',
    description: new Date('2008-05-27T17:29:43.471Z'),
  },
  {
    firstName: 'Kayden',
    lastName: 'Schmeler',
    username: 'Kayden-Schmeler',
    email: 'Dimitri94@example.com',
    birthDate: new Date('1989-08-27T13:56:15.836Z'),
    basicSalary: 7352298.477,
    status: 'Permanent',
    group: 'Business',
    description: new Date('2002-01-04T16:59:55.184Z'),
  },
  {
    firstName: 'Elias',
    lastName: 'Senger',
    username: 'Elias-Senger',
    email: 'Ethan.Emard@yahoo.co.id',
    birthDate: new Date('2002-11-11T22:38:49.989Z'),
    basicSalary: 5443051.856,
    status: 'Contract',
    group: 'Sales',
    description: new Date('2010-10-15T09:07:52.214Z'),
  },
  {
    firstName: 'Roger',
    lastName: 'Lynch',
    username: 'Roger-Lynch',
    email: 'Zackery.Connelly-Lowe93@yahoo.co.id',
    birthDate: new Date('1981-04-17T19:53:40.489Z'),
    basicSalary: 5270054.492,
    status: 'Contract',
    group: 'Risk',
    description: new Date('2003-08-10T18:01:57.793Z'),
  },
  {
    firstName: 'Immanuel',
    lastName: 'Runte',
    username: 'Immanuel-Runte',
    email: 'Broderick50@gmail.com',
    birthDate: new Date('1987-12-17T05:32:36.048Z'),
    basicSalary: 5829336.657,
    status: 'Outsource',
    group: 'Finance',
    description: new Date('2005-08-10T06:58:25.406Z'),
  },
  {
    firstName: 'Floy',
    lastName: 'Pfannerstill',
    username: 'Floy-Pfannerstill',
    email: 'Carmella.Kutch@yahoo.co.id',
    birthDate: new Date('2002-12-10T00:47:12.196Z'),
    basicSalary: 7049238.854,
    status: 'Contract',
    group: 'Risk',
    description: new Date('2003-05-03T16:57:11.947Z'),
  },
  {
    firstName: 'Bobbie',
    lastName: 'Goldner',
    username: 'Bobbie-Goldner',
    email: 'Roosevelt.Huel@gmail.com',
    birthDate: new Date('2001-06-11T15:36:25.022Z'),
    basicSalary: 6423172.147,
    status: 'Contract',
    group: 'Security',
    description: new Date('2006-07-09T21:26:13.595Z'),
  },
  {
    firstName: 'Lester',
    lastName: 'Feeney',
    username: 'Lester-Feeney',
    email: 'Ariane_Kulas@yahoo.com',
    birthDate: new Date('1986-01-17T18:08:45.096Z'),
    basicSalary: 5916971.199,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2016-01-11T18:10:10.485Z'),
  },
  {
    firstName: 'Roxanne',
    lastName: 'Ruecker',
    username: 'Roxanne-Ruecker',
    email: 'Amalia98@yahoo.com',
    birthDate: new Date('1993-09-01T13:34:09.450Z'),
    basicSalary: 6165048.871,
    status: 'Outsource',
    group: 'Business',
    description: new Date('2022-12-17T02:40:26.849Z'),
  },
  {
    firstName: 'Deshaun',
    lastName: 'Greenholt',
    username: 'Deshaun-Greenholt',
    email: 'Susie.Leannon6@example.com',
    birthDate: new Date('2000-12-03T14:59:50.114Z'),
    basicSalary: 6505547.534,
    status: 'Outsource',
    group: 'Support',
    description: new Date('2008-03-14T18:30:48.309Z'),
  },
  {
    firstName: 'Mckenzie',
    lastName: 'Rice',
    username: 'Mckenzie-Rice',
    email: 'Camila_Swift@gmail.com',
    birthDate: new Date('1994-10-12T21:36:45.778Z'),
    basicSalary: 5044993.025,
    status: 'Permanent',
    group: 'Finance',
    description: new Date('2017-06-25T20:26:58.674Z'),
  },
  {
    firstName: 'Esther',
    lastName: 'Kulas',
    username: 'Esther-Kulas',
    email: 'Madyson.Harris63@yahoo.co.id',
    birthDate: new Date('1993-04-25T07:22:05.754Z'),
    basicSalary: 6017790.564,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2023-01-08T10:09:18.245Z'),
  },
  {
    firstName: 'Maia',
    lastName: 'Simonis',
    username: 'Maia-Simonis',
    email: 'Rebeca_Ward@example.com',
    birthDate: new Date('1984-04-02T09:43:23.577Z'),
    basicSalary: 5175738.422,
    status: 'Contract',
    group: 'Business',
    description: new Date('2010-04-03T12:27:04.875Z'),
  },
  {
    firstName: 'Shemar',
    lastName: 'Jast',
    username: 'Shemar-Jast',
    email: 'Joan.Carter59@yahoo.co.id',
    birthDate: new Date('1985-12-19T17:31:52.668Z'),
    basicSalary: 7241544.146,
    status: 'Contract',
    group: 'Finance',
    description: new Date('2017-11-26T03:01:09.496Z'),
  },
  {
    firstName: 'Caleb',
    lastName: 'Breitenberg',
    username: 'Caleb-Breitenberg',
    email: 'Zechariah.Bahringer@yahoo.com',
    birthDate: new Date('2002-04-13T12:36:58.190Z'),
    basicSalary: 5783510.332,
    status: 'Permanent',
    group: 'Operations',
    description: new Date('2017-10-13T12:02:20.247Z'),
  },
  {
    firstName: 'Jaleel',
    lastName: 'Fahey-Kuhic',
    username: 'Jaleel-Fahey-Kuhic',
    email: 'Reinhold_OConner14@example.com',
    birthDate: new Date('1980-07-19T11:43:35.212Z'),
    basicSalary: 6876668.5,
    status: 'Permanent',
    group: 'Security',
    description: new Date('2004-09-18T15:00:05.289Z'),
  },
  {
    firstName: "D'angelo",
    lastName: 'Hauck',
    username: "D'angelo-Hauck",
    email: 'Darrick.Veum@example.com',
    birthDate: new Date('2000-03-22T16:17:50.044Z'),
    basicSalary: 5989661.144,
    status: 'Permanent',
    group: 'Operations',
    description: new Date('2021-11-26T10:19:32.603Z'),
  },
  {
    firstName: 'Destany',
    lastName: 'Collins',
    username: 'Destany-Collins',
    email: 'Gabrielle.Bruen@yahoo.co.id',
    birthDate: new Date('1994-03-04T15:21:42.162Z'),
    basicSalary: 5091458.331,
    status: 'Permanent',
    group: 'Human Resource',
    description: new Date('2014-01-16T02:02:29.769Z'),
  },
  {
    firstName: 'Kassandra',
    lastName: 'Considine',
    username: 'Kassandra-Considine',
    email: 'John_Daniel75@yahoo.com',
    birthDate: new Date('1981-02-01T02:01:44.431Z'),
    basicSalary: 6426344.914,
    status: 'Outsource',
    group: 'Support',
    description: new Date('2014-10-13T13:33:29.004Z'),
  },
  {
    firstName: 'Anita',
    lastName: 'Koss',
    username: 'Anita-Koss',
    email: 'Jaclyn.Funk18@example.com',
    birthDate: new Date('1990-09-19T07:59:17.971Z'),
    basicSalary: 6029307.627,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2000-10-11T11:49:35.499Z'),
  },
  {
    firstName: 'Ezekiel',
    lastName: 'Schowalter',
    username: 'Ezekiel-Schowalter',
    email: 'Annamae.Thiel@example.com',
    birthDate: new Date('1991-08-25T06:34:59.035Z'),
    basicSalary: 7171745.352,
    status: 'Outsource',
    group: 'Support',
    description: new Date('2013-01-12T06:56:04.140Z'),
  },
  {
    firstName: 'Athena',
    lastName: 'Koepp',
    username: 'Athena-Koepp',
    email: 'Geovanny.Hermann@gmail.com',
    birthDate: new Date('1997-11-27T15:29:37.873Z'),
    basicSalary: 6304892.446,
    status: 'Outsource',
    group: 'Human Resource',
    description: new Date('2004-12-07T08:31:56.614Z'),
  },
  {
    firstName: 'George',
    lastName: 'Collier',
    username: 'George-Collier',
    email: 'Melvin80@yahoo.com',
    birthDate: new Date('1990-05-18T01:15:23.843Z'),
    basicSalary: 6086482.039,
    status: 'Outsource',
    group: 'Support',
    description: new Date('2022-12-19T04:55:48.175Z'),
  },
  {
    firstName: 'Pink',
    lastName: 'Huel',
    username: 'Pink-Huel',
    email: 'Priscilla_Wiegand@yahoo.co.id',
    birthDate: new Date('1982-03-17T15:47:45.297Z'),
    basicSalary: 6751067.689,
    status: 'Permanent',
    group: 'Support',
    description: new Date('2000-07-16T17:18:56.212Z'),
  },
  {
    firstName: 'Lavern',
    lastName: 'Walsh-Fritsch',
    username: 'Lavern-Walsh-Fritsch',
    email: 'Vladimir.Wisozk95@yahoo.co.id',
    birthDate: new Date('1991-05-19T20:34:06.437Z'),
    basicSalary: 6029423.96,
    status: 'Contract',
    group: 'Support',
    description: new Date('2002-06-27T01:53:10.959Z'),
  },
  {
    firstName: 'Nina',
    lastName: 'Satterfield',
    username: 'Nina-Satterfield',
    email: 'Aleen.VonRueden4@yahoo.co.id',
    birthDate: new Date('1984-09-05T16:12:07.545Z'),
    basicSalary: 7379833.567,
    status: 'Permanent',
    group: 'Legal',
    description: new Date('2008-05-11T13:50:22.360Z'),
  },
  {
    firstName: 'Eddie',
    lastName: 'Douglas',
    username: 'Eddie-Douglas',
    email: 'Jamarcus60@gmail.com',
    birthDate: new Date('1992-02-20T10:38:11.099Z'),
    basicSalary: 6200400.577,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2006-05-07T21:16:39.767Z'),
  },
  {
    firstName: 'Elinore',
    lastName: 'Harvey',
    username: 'Elinore-Harvey',
    email: 'Garfield_Okuneva@yahoo.co.id',
    birthDate: new Date('1985-06-19T23:46:44.957Z'),
    basicSalary: 5548704.19,
    status: 'Permanent',
    group: 'Human Resource',
    description: new Date('2003-12-25T21:52:29.100Z'),
  },
  {
    firstName: 'Arielle',
    lastName: 'Champlin',
    username: 'Arielle-Champlin',
    email: 'Meredith.Bergstrom@yahoo.com',
    birthDate: new Date('1983-09-23T11:34:16.570Z'),
    basicSalary: 7261137.428,
    status: 'Permanent',
    group: 'Finance',
    description: new Date('2005-06-30T03:48:57.686Z'),
  },
  {
    firstName: 'Dedric',
    lastName: 'Moore',
    username: 'Dedric-Moore',
    email: 'Adelia_Hintz35@yahoo.com',
    birthDate: new Date('1994-12-25T07:53:08.225Z'),
    basicSalary: 5338329.761,
    status: 'Permanent',
    group: 'Legal',
    description: new Date('2018-08-13T00:33:40.896Z'),
  },
  {
    firstName: 'Arno',
    lastName: 'Tromp',
    username: 'Arno-Tromp',
    email: 'Karolann49@yahoo.com',
    birthDate: new Date('1984-02-02T15:58:49.242Z'),
    basicSalary: 5285550.896,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2000-04-13T14:57:38.532Z'),
  },
  {
    firstName: 'Verona',
    lastName: 'Kilback',
    username: 'Verona-Kilback',
    email: 'Michel.Schmidt45@yahoo.com',
    birthDate: new Date('1986-03-20T09:07:57.382Z'),
    basicSalary: 6100017.065,
    status: 'Outsource',
    group: 'Support',
    description: new Date('2007-09-12T21:13:08.203Z'),
  },
  {
    firstName: 'Bryon',
    lastName: 'Wiegand',
    username: 'Bryon-Wiegand',
    email: 'Velda.Ullrich13@example.com',
    birthDate: new Date('1981-11-21T20:20:38.959Z'),
    basicSalary: 5156741.844,
    status: 'Permanent',
    group: 'Business',
    description: new Date('2004-11-10T05:44:37.334Z'),
  },
  {
    firstName: 'Ramona',
    lastName: 'Lowe',
    username: 'Ramona-Lowe',
    email: 'Tevin.Sanford@gmail.com',
    birthDate: new Date('1984-10-19T14:01:11.110Z'),
    basicSalary: 5448910.342,
    status: 'Contract',
    group: 'Operations',
    description: new Date('2003-06-27T04:44:43.354Z'),
  },
  {
    firstName: 'Celestino',
    lastName: 'Kovacek',
    username: 'Celestino-Kovacek',
    email: 'Harmon97@yahoo.co.id',
    birthDate: new Date('1988-07-29T12:40:17.696Z'),
    basicSalary: 5755170.467,
    status: 'Outsource',
    group: 'Security',
    description: new Date('2015-04-26T00:04:09.724Z'),
  },
  {
    firstName: 'Gudrun',
    lastName: 'Crona',
    username: 'Gudrun-Crona',
    email: 'Soledad.Kozey52@example.com',
    birthDate: new Date('1994-05-31T22:19:37.286Z'),
    basicSalary: 7163820.585,
    status: 'Contract',
    group: 'Risk',
    description: new Date('2012-03-17T06:02:01.990Z'),
  },
  {
    firstName: 'Margot',
    lastName: 'Welch',
    username: 'Margot-Welch',
    email: 'Mekhi_Frami53@example.com',
    birthDate: new Date('1994-01-18T18:31:33.620Z'),
    basicSalary: 6954718.589,
    status: 'Outsource',
    group: 'Sales',
    description: new Date('2007-03-11T18:23:09.644Z'),
  },
  {
    firstName: 'Willa',
    lastName: 'King',
    username: 'Willa-King',
    email: 'Ahmad.Carter28@yahoo.co.id',
    birthDate: new Date('1984-08-17T01:53:25.294Z'),
    basicSalary: 5991969.364,
    status: 'Permanent',
    group: 'Finance',
    description: new Date('2001-06-13T03:34:45.372Z'),
  },
  {
    firstName: 'Nicholaus',
    lastName: 'Spencer',
    username: 'Nicholaus-Spencer',
    email: 'Makenzie.Abernathy@gmail.com',
    birthDate: new Date('1984-05-18T06:39:49.422Z'),
    basicSalary: 5365141.979,
    status: 'Contract',
    group: 'Information Technology',
    description: new Date('2000-12-16T15:41:01.917Z'),
  },
  {
    firstName: 'Kaylah',
    lastName: 'Hansen',
    username: 'Kaylah-Hansen',
    email: 'Delaney76@gmail.com',
    birthDate: new Date('1998-04-18T05:13:51.267Z'),
    basicSalary: 6456897.633,
    status: 'Outsource',
    group: 'Human Resource',
    description: new Date('2020-08-18T11:17:22.710Z'),
  },
  {
    firstName: 'Lincoln',
    lastName: 'Jenkins',
    username: 'Lincoln-Jenkins',
    email: 'Ebony_Kassulke@yahoo.com',
    birthDate: new Date('1995-01-06T02:16:30.291Z'),
    basicSalary: 5061742.242,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2024-06-10T07:15:09.275Z'),
  },
  {
    firstName: 'Cale',
    lastName: 'West',
    username: 'Cale-West',
    email: 'Celia.Keeling@yahoo.com',
    birthDate: new Date('1984-03-31T22:15:43.488Z'),
    basicSalary: 6497666.024,
    status: 'Contract',
    group: 'Sales',
    description: new Date('2004-08-16T14:04:19.340Z'),
  },
  {
    firstName: 'Gordon',
    lastName: 'Koch',
    username: 'Gordon-Koch',
    email: 'Elton32@yahoo.com',
    birthDate: new Date('1980-08-03T22:22:45.688Z'),
    basicSalary: 7133975.052,
    status: 'Outsource',
    group: 'Sales',
    description: new Date('2009-02-07T12:39:26.910Z'),
  },
  {
    firstName: 'Fernando',
    lastName: 'Daugherty',
    username: 'Fernando-Daugherty',
    email: 'Clyde_Stark27@gmail.com',
    birthDate: new Date('1986-11-29T22:27:59.771Z'),
    basicSalary: 6429972.605,
    status: 'Outsource',
    group: 'Business',
    description: new Date('2016-11-05T21:11:45.248Z'),
  },
  {
    firstName: 'Kali',
    lastName: 'Orn',
    username: 'Kali-Orn',
    email: 'Mariane.Hyatt64@yahoo.com',
    birthDate: new Date('1983-09-15T01:39:29.953Z'),
    basicSalary: 5900125.999,
    status: 'Contract',
    group: 'Operations',
    description: new Date('2000-11-17T05:16:09.280Z'),
  },
  {
    firstName: 'Ellen',
    lastName: 'Langosh',
    username: 'Ellen-Langosh',
    email: 'Joelle40@yahoo.co.id',
    birthDate: new Date('1981-01-24T07:28:22.952Z'),
    basicSalary: 7483842.482,
    status: 'Permanent',
    group: 'Human Resource',
    description: new Date('2020-06-17T07:28:01.546Z'),
  },
  {
    firstName: 'Ciara',
    lastName: 'Renner',
    username: 'Ciara-Renner',
    email: 'Rosemarie_Kshlerin29@yahoo.co.id',
    birthDate: new Date('2002-07-11T01:16:00.495Z'),
    basicSalary: 5085133.691,
    status: 'Outsource',
    group: 'Risk',
    description: new Date('2022-06-10T06:27:01.209Z'),
  },
  {
    firstName: 'Cleta',
    lastName: 'Weimann',
    username: 'Cleta-Weimann',
    email: 'Alexys_Mraz@yahoo.co.id',
    birthDate: new Date('1982-12-22T17:31:11.416Z'),
    basicSalary: 6924815.871,
    status: 'Outsource',
    group: 'Operations',
    description: new Date('2005-02-24T10:40:29.841Z'),
  },
  {
    firstName: 'Aryanna',
    lastName: 'Miller',
    username: 'Aryanna-Miller',
    email: 'Ward.Kilback@gmail.com',
    birthDate: new Date('1999-01-21T06:24:42.362Z'),
    basicSalary: 7111933.555,
    status: 'Contract',
    group: 'Security',
    description: new Date('2008-03-05T05:53:59.912Z'),
  },
  {
    firstName: 'Dee',
    lastName: 'Maggio',
    username: 'Dee-Maggio',
    email: 'Karli29@gmail.com',
    birthDate: new Date('1982-01-04T08:32:36.490Z'),
    basicSalary: 7128941.076,
    status: 'Contract',
    group: 'Finance',
    description: new Date('2006-02-21T11:51:07.397Z'),
  },
  {
    firstName: 'Dexter',
    lastName: 'Konopelski',
    username: 'Dexter-Konopelski',
    email: 'Jace.Wisoky41@yahoo.com',
    birthDate: new Date('1989-05-07T02:27:43.832Z'),
    basicSalary: 7378899.005,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2014-03-21T22:38:17.001Z'),
  },
  {
    firstName: 'Pattie',
    lastName: 'Dach',
    username: 'Pattie-Dach',
    email: 'Juwan28@gmail.com',
    birthDate: new Date('1989-11-01T06:53:19.211Z'),
    basicSalary: 5753872.118,
    status: 'Contract',
    group: 'Information Technology',
    description: new Date('2018-08-29T20:53:30.805Z'),
  },
  {
    firstName: 'Guillermo',
    lastName: 'Bayer',
    username: 'Guillermo-Bayer',
    email: 'Andreane_Champlin19@example.com',
    birthDate: new Date('1988-10-20T04:44:48.583Z'),
    basicSalary: 6282656.378,
    status: 'Permanent',
    group: 'Support',
    description: new Date('2012-07-06T07:31:43.143Z'),
  },
  {
    firstName: 'Lilyan',
    lastName: 'Upton',
    username: 'Lilyan-Upton',
    email: 'Fernando.Casper@gmail.com',
    birthDate: new Date('1998-08-18T15:15:01.797Z'),
    basicSalary: 5258744.594,
    status: 'Contract',
    group: 'Sales',
    description: new Date('2024-04-11T17:34:26.626Z'),
  },
  {
    firstName: 'Joshua',
    lastName: 'Fay',
    username: 'Joshua-Fay',
    email: 'Velva7@example.com',
    birthDate: new Date('1991-07-07T06:36:00.861Z'),
    basicSalary: 7117889.227,
    status: 'Outsource',
    group: 'Business',
    description: new Date('2009-10-30T06:57:03.519Z'),
  },
  {
    firstName: 'Sarai',
    lastName: 'Sanford',
    username: 'Sarai-Sanford',
    email: 'Polly.Turner78@gmail.com',
    birthDate: new Date('1986-08-18T11:10:46.071Z'),
    basicSalary: 5296429.216,
    status: 'Permanent',
    group: 'Business',
    description: new Date('2016-05-06T01:07:09.464Z'),
  },
  {
    firstName: 'Victor',
    lastName: 'Roberts',
    username: 'Victor-Roberts',
    email: 'Kelsie_Jacobi@example.com',
    birthDate: new Date('1998-09-08T09:01:58.228Z'),
    basicSalary: 5584676.487,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2003-09-28T01:01:39.735Z'),
  },
  {
    firstName: 'Zachariah',
    lastName: 'Raynor',
    username: 'Zachariah-Raynor',
    email: 'Iliana28@yahoo.com',
    birthDate: new Date('1996-01-27T11:32:01.195Z'),
    basicSalary: 7484299.096,
    status: 'Outsource',
    group: 'Legal',
    description: new Date('2006-08-29T05:11:37.420Z'),
  },
  {
    firstName: 'Wiley',
    lastName: 'Johns',
    username: 'Wiley-Johns',
    email: 'Kristy_Marquardt23@gmail.com',
    birthDate: new Date('1984-09-16T18:12:34.596Z'),
    basicSalary: 6876882.259,
    status: 'Outsource',
    group: 'Risk',
    description: new Date('2010-10-10T07:09:04.240Z'),
  },
  {
    firstName: 'Jamal',
    lastName: 'Lockman',
    username: 'Jamal-Lockman',
    email: 'Delbert17@yahoo.com',
    birthDate: new Date('1985-12-22T04:26:23.719Z'),
    basicSalary: 7164128.27,
    status: 'Permanent',
    group: 'Sales',
    description: new Date('2018-05-05T03:03:54.819Z'),
  },
  {
    firstName: 'Broderick',
    lastName: 'Frami',
    username: 'Broderick-Frami',
    email: 'Edythe_Hansen95@yahoo.com',
    birthDate: new Date('1990-06-03T12:11:45.601Z'),
    basicSalary: 5215401.272,
    status: 'Permanent',
    group: 'Finance',
    description: new Date('2024-12-27T02:32:27.584Z'),
  },
  {
    firstName: 'Winifred',
    lastName: 'Walker',
    username: 'Winifred-Walker',
    email: 'Felicita76@yahoo.co.id',
    birthDate: new Date('1992-10-31T22:52:43.868Z'),
    basicSalary: 5476725.404,
    status: 'Contract',
    group: 'Risk',
    description: new Date('2012-01-06T11:09:46.667Z'),
  },
  {
    firstName: 'Hayden',
    lastName: 'Fahey',
    username: 'Hayden-Fahey',
    email: 'Erling.Nolan51@example.com',
    birthDate: new Date('1996-09-08T11:25:17.525Z'),
    basicSalary: 6435785.111,
    status: 'Permanent',
    group: 'Legal',
    description: new Date('2024-08-30T08:21:31.742Z'),
  },
  {
    firstName: 'Afton',
    lastName: 'Boyle',
    username: 'Afton-Boyle',
    email: 'Nelda67@yahoo.co.id',
    birthDate: new Date('1995-12-31T03:59:04.286Z'),
    basicSalary: 6128688.259,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2018-11-25T21:41:36.631Z'),
  },
  {
    firstName: 'Ebba',
    lastName: 'Schulist',
    username: 'Ebba-Schulist',
    email: 'Ottilie_Medhurst68@example.com',
    birthDate: new Date('1990-07-24T22:53:15.152Z'),
    basicSalary: 7309178.079,
    status: 'Outsource',
    group: 'Risk',
    description: new Date('2021-01-15T01:34:49.007Z'),
  },
  {
    firstName: 'Joesph',
    lastName: 'Bosco',
    username: 'Joesph-Bosco',
    email: 'Donavon_Anderson95@yahoo.co.id',
    birthDate: new Date('1981-08-04T01:26:27.598Z'),
    basicSalary: 5011687.463,
    status: 'Outsource',
    group: 'Sales',
    description: new Date('2022-03-14T19:47:43.846Z'),
  },
  {
    firstName: 'Kip',
    lastName: 'Botsford',
    username: 'Kip-Botsford',
    email: 'Alberta_Von78@yahoo.com',
    birthDate: new Date('1997-02-05T03:58:51.277Z'),
    basicSalary: 7158848.564,
    status: 'Contract',
    group: 'Operations',
    description: new Date('2015-10-01T19:44:03.201Z'),
  },
  {
    firstName: 'Gavin',
    lastName: 'Ryan',
    username: 'Gavin-Ryan',
    email: 'Brayan39@yahoo.com',
    birthDate: new Date('1999-03-06T06:12:01.548Z'),
    basicSalary: 6422367.603,
    status: 'Outsource',
    group: 'Human Resource',
    description: new Date('2023-01-16T14:43:10.551Z'),
  },
  {
    firstName: 'Earnest',
    lastName: 'Ondricka',
    username: 'Earnest-Ondricka',
    email: 'Yessenia.Ratke39@gmail.com',
    birthDate: new Date('1988-10-14T16:18:19.038Z'),
    basicSalary: 5382820.503,
    status: 'Contract',
    group: 'Security',
    description: new Date('2006-12-29T22:30:33.010Z'),
  },
  {
    firstName: 'Katheryn',
    lastName: 'Wolff',
    username: 'Katheryn-Wolff',
    email: 'Derrick.Ziemann@gmail.com',
    birthDate: new Date('1997-03-18T15:32:22.350Z'),
    basicSalary: 5172619.385,
    status: 'Outsource',
    group: 'Human Resource',
    description: new Date('2002-09-01T07:29:07.959Z'),
  },
  {
    firstName: 'Orval',
    lastName: 'Gottlieb',
    username: 'Orval-Gottlieb',
    email: 'Zoie61@yahoo.com',
    birthDate: new Date('1983-09-22T20:58:44.762Z'),
    basicSalary: 5603403.725,
    status: 'Permanent',
    group: 'Risk',
    description: new Date('2019-05-13T18:33:29.045Z'),
  },
  {
    firstName: 'Jeanie',
    lastName: 'Jenkins-Murazik',
    username: 'Jeanie-Jenkins-Murazik',
    email: 'Korey.Langworth@yahoo.com',
    birthDate: new Date('1980-01-12T07:46:45.501Z'),
    basicSalary: 6849771.876,
    status: 'Outsource',
    group: 'Finance',
    description: new Date('2021-10-25T19:01:52.306Z'),
  },
  {
    firstName: 'Abbigail',
    lastName: 'Littel',
    username: 'Abbigail-Littel',
    email: 'Ettie_Ledner@example.com',
    birthDate: new Date('1983-06-22T07:02:37.586Z'),
    basicSalary: 6049795.593,
    status: 'Contract',
    group: 'Information Technology',
    description: new Date('2002-06-19T14:12:11.780Z'),
  },
  {
    firstName: 'Baron',
    lastName: 'Stark',
    username: 'Baron-Stark',
    email: 'Layne_Stoltenberg72@example.com',
    birthDate: new Date('1998-05-25T13:03:40.951Z'),
    basicSalary: 5486288.271,
    status: 'Contract',
    group: 'Information Technology',
    description: new Date('2015-10-29T18:06:19.790Z'),
  },
  {
    firstName: 'Vladimir',
    lastName: 'Deckow',
    username: 'Vladimir-Deckow',
    email: 'Jessyca71@gmail.com',
    birthDate: new Date('1999-09-29T11:12:52.558Z'),
    basicSalary: 7257664.252,
    status: 'Contract',
    group: 'Security',
    description: new Date('2003-06-01T20:44:32.219Z'),
  },
  {
    firstName: 'Devyn',
    lastName: 'Fay',
    username: 'Devyn-Fay',
    email: 'Alana_Kihn@yahoo.com',
    birthDate: new Date('1995-08-06T07:45:43.132Z'),
    basicSalary: 6822452.838,
    status: 'Contract',
    group: 'Human Resource',
    description: new Date('2019-02-19T18:45:37.315Z'),
  },
  {
    firstName: 'Eleanora',
    lastName: 'Harris',
    username: 'Eleanora-Harris',
    email: 'Linda.Daniel@yahoo.co.id',
    birthDate: new Date('1987-08-17T18:04:15.790Z'),
    basicSalary: 7075509.782,
    status: 'Contract',
    group: 'Security',
    description: new Date('2011-01-08T08:26:46.472Z'),
  },
  {
    firstName: 'Allan',
    lastName: 'Ortiz-Buckridge',
    username: 'Allan-Ortiz-Buckridge',
    email: 'Carolyn_Steuber54@gmail.com',
    birthDate: new Date('1986-12-17T22:47:30.292Z'),
    basicSalary: 7327769.001,
    status: 'Contract',
    group: 'Sales',
    description: new Date('2021-04-24T18:02:24.646Z'),
  },
  {
    firstName: 'Leon',
    lastName: 'Feeney',
    username: 'Leon-Feeney',
    email: 'Raphaelle.Ritchie59@gmail.com',
    birthDate: new Date('1995-01-14T00:22:13.714Z'),
    basicSalary: 7287983.686,
    status: 'Outsource',
    group: 'Information Technology',
    description: new Date('2020-04-14T02:31:45.647Z'),
  },
  {
    firstName: 'Johnathon',
    lastName: 'Murazik',
    username: 'Johnathon-Murazik',
    email: 'Corene99@yahoo.co.id',
    birthDate: new Date('1997-07-09T22:14:36.546Z'),
    basicSalary: 5290722.328,
    status: 'Outsource',
    group: 'Finance',
    description: new Date('2005-05-03T06:50:25.214Z'),
  },
  {
    firstName: 'Donnell',
    lastName: 'Kihn',
    username: 'Donnell-Kihn',
    email: 'Henderson.Nitzsche@gmail.com',
    birthDate: new Date('1981-03-25T03:06:58.032Z'),
    basicSalary: 5820562.06,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2003-09-19T06:20:14.912Z'),
  },
  {
    firstName: 'Vida',
    lastName: 'Bechtelar',
    username: 'Vida-Bechtelar',
    email: 'Twila49@example.com',
    birthDate: new Date('1989-07-29T07:32:00.319Z'),
    basicSalary: 5852133.132,
    status: 'Permanent',
    group: 'Sales',
    description: new Date('2015-10-25T05:31:55.994Z'),
  },
  {
    firstName: 'Clifford',
    lastName: 'Schroeder-Kohler',
    username: 'Clifford-Schroeder-Kohler',
    email: 'Aaron_Sawayn@yahoo.com',
    birthDate: new Date('1983-07-30T13:53:52.672Z'),
    basicSalary: 7193031.352,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2003-01-03T13:45:08.949Z'),
  },
  {
    firstName: 'Travis',
    lastName: 'Shields',
    username: 'Travis-Shields',
    email: 'Blake_McLaughlin21@yahoo.co.id',
    birthDate: new Date('1997-09-18T01:31:37.753Z'),
    basicSalary: 6969391.004,
    status: 'Contract',
    group: 'Human Resource',
    description: new Date('2023-08-06T09:33:55.468Z'),
  },
  {
    firstName: 'Jaime',
    lastName: 'Russel',
    username: 'Jaime-Russel',
    email: 'Rex_Gutkowski@yahoo.co.id',
    birthDate: new Date('1984-08-24T12:58:10.361Z'),
    basicSalary: 7461464.841,
    status: 'Permanent',
    group: 'Information Technology',
    description: new Date('2019-08-03T04:59:06.336Z'),
  },
  {
    firstName: 'Nicole',
    lastName: 'Hoppe',
    username: 'Nicole-Hoppe',
    email: 'Randi.Mosciski@yahoo.com',
    birthDate: new Date('1983-06-04T13:11:41.171Z'),
    basicSalary: 7276237.365,
    status: 'Outsource',
    group: 'Support',
    description: new Date('2010-08-12T16:08:27.001Z'),
  },
  {
    firstName: 'Hank',
    lastName: 'Herman',
    username: 'Hank-Herman',
    email: 'Lafayette_Grimes38@example.com',
    birthDate: new Date('1982-03-13T13:18:06.046Z'),
    basicSalary: 5468418.398,
    status: 'Outsource',
    group: 'Sales',
    description: new Date('2019-01-27T13:38:04.627Z'),
  },
  {
    firstName: 'Brandon',
    lastName: 'Hickle',
    username: 'Brandon-Hickle',
    email: 'Everardo_Weimann@yahoo.co.id',
    birthDate: new Date('1993-02-23T02:15:31.078Z'),
    basicSalary: 5829781.075,
    status: 'Contract',
    group: 'Operations',
    description: new Date('2016-08-27T01:48:21.035Z'),
  },
  {
    firstName: 'Mayra',
    lastName: 'Fritsch-Erdman',
    username: 'Mayra-Fritsch-Erdman',
    email: 'Weldon.Rice85@yahoo.com',
    birthDate: new Date('2000-12-29T22:50:55.667Z'),
    basicSalary: 6279357.848,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2017-06-16T04:57:18.748Z'),
  },
  {
    firstName: 'Ressie',
    lastName: 'Hintz',
    username: 'Ressie-Hintz',
    email: 'Giuseppe84@example.com',
    birthDate: new Date('1981-06-27T03:36:11.684Z'),
    basicSalary: 6087610.45,
    status: 'Contract',
    group: 'Legal',
    description: new Date('2014-11-07T11:32:26.029Z'),
  },
];
