// in src/notes.tsx
import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput,
  useRecordContext,
} from "react-admin";

const NoteTitle = () => {
  const record = useRecordContext();
  return <span>Note {record ? `"${record.title}"` : ""}</span>;
};

// const noteFilters = [
//   <TextInput source="q" label="Search" alwaysOn />,
//   <ReferenceInput source="userId" label="User" reference="users" />,
// ];

export const NoteList = () => (
  <List /*filters={noteFilters}*/>
    {/*   <Datagrid rowClick="edit"> */}
    <Datagrid>
      {/* <TextField source="id" /> */}
      {/* <ReferenceField source="userId" reference="users" link="show" /> */}
      {/* <TextField source="id" /> */}
      <TextField source="title" />
      <TextField source="content" />
      <TextField source="category" />
      <EditButton />
    </Datagrid>
  </List>
);

export const NoteEdit = () => (
  <Edit title={<NoteTitle />}>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      {/* <ReferenceInput source="userId" reference="users" /> */}
      {/* <TextInput source="id" /> */}
      <TextInput source="title" />
      {/* <TextInput source="body" /> */}
      <TextInput source="category" />
      <TextInput source="content" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const NoteCreate = () => (
  <Create>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="title" />
      <TextInput source="category" />
      <TextInput source="content" multiline rows={5} />
    </SimpleForm>
  </Create>
);
