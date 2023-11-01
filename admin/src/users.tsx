// in src/users.tsx
// https://marmelab.com/react-admin/Tutorial.html
import { useMediaQuery, Theme } from "@mui/material";
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  // ReferenceInput,
  TextInput,
  useRecordContext,
  EmailField
//   UrlField,
} from "react-admin";
// import MyUrlField from './MyUrlField';

const UserName = () => {
  const record = useRecordContext();
  return <span>User {record ? `"${record.name}"` : ""}</span>;
};

export const UserList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("sm"));
  return (
    <List>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.username}
          tertiaryText={(record) => record.email}
        />
      ) : (
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
          {/* <TextField source="username" /> */}
          <EmailField source="email" />
          <TextField source="address" />
          <TextField source="phone" />
          {/* <UrlField source="website" /> */}
          {/* <MyUrlField source="website" /> */}
          <TextField source="company" />
          <EditButton />
        </Datagrid>
      )}
    </List>
  );
};

export const UserEdit = () => (
  <Edit title={<UserName />}>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      {/* <ReferenceInput source="userId" reference="users" /> */}
      {/* <TextInput source="id" /> */}
      <TextInput source="name" />
      {/* <TextInput source="body" /> */}
      {/* <TextInput source="body" multiline rows={5} /> */}
    </SimpleForm>
  </Edit>
);

export const UserCreate = () => (
  <Create>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address" />
      <TextInput source="phone" />
      <TextInput source="company" />
      {/* <TextInput source="body" multiline rows={5} /> */}
    </SimpleForm>
  </Create>
);

