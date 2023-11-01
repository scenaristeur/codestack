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

const StageTitle = () => {
  const record = useRecordContext();
  return <span>Stage {record ? `"${record.titre}"` : ""}</span>;
};

const stageFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  // <ReferenceInput source="userId" label="User" reference="users" />,
];

export const StageList = () => (
  <List filters={stageFilters}>
    {/*   <Datagrid rowClick="edit"> */}
    <Datagrid>
      <TextField source="id" />
      {/* <ReferenceField source="userId" reference="users" link="show" /> */}
      {/* <TextField source="id" /> */}
      <TextField source="titre" />
      {/* <TextField source="body" /> */}
      <EditButton />
    </Datagrid>
  </List>
);

export const StageEdit = () => (
  <Edit title={<StageTitle />}>
    <SimpleForm>
      <TextInput source="id" InputProps={{ disabled: true }} />
      {/* <ReferenceInput source="userId" reference="users" /> */}
      {/* <TextInput source="id" /> */}
      <TextInput source="titre" />
      {/* <TextInput source="body" /> */}
      <TextInput source="description" multiline rows={5} />
    </SimpleForm>
  </Edit>
);

export const StageCreate = () => (
  <Create>
    <SimpleForm>
      {/* <ReferenceInput source="userId" reference="users" /> */}
      <TextInput source="titre" />
      <TextInput source="description" multiline rows={5} />
    </SimpleForm>
  </Create>
);
