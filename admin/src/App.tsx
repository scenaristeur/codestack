// import {
//   Admin,
//   Resource,
//   ListGuesser,
//   EditGuesser,
//   ShowGuesser,
// } from "react-admin";
// import { dataProvider } from "./dataProvider";
import { Dashboard } from "./Dashboard";
import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
  defaultTheme
} from "react-admin";
import { dataProvider } from "./dataProvider";
import simpleRestProvider from 'ra-data-simple-rest';
// import { PostList, PostEdit, PostCreate } from "./posts";
import { NoteList, NoteEdit, NoteCreate } from "./notes";
import { StageList, StageEdit, StageCreate } from "./stages";
// import { UserList, UserEdit, UserCreate } from "./users";
import { authProvider } from "./authProvider";

import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";

const lightTheme = defaultTheme;
const darkTheme = { ...defaultTheme, palette: { mode: 'dark' } };

export const App = () => (
  <Admin
    dataProvider={dataProvider}
    dashboard={Dashboard}
    authProvider={authProvider}
    theme={lightTheme}
    darkTheme={darkTheme}
  >
    <Resource
      name="stages"
      list={StageList}
      edit={StageEdit}
      create={StageCreate}
       icon={PostIcon}
    />
         <Resource
      name="notes"
      list={NoteList}
      edit={NoteEdit}
      create={NoteCreate}
       icon={PostIcon}
    /> 
   {/* <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource
      name="users"
      list={UserList}
      edit={UserEdit}
      create={UserCreate}
      // recordRepresentation="name"
      icon={UserIcon}
    /> */}
  </Admin>
);
