import React, { useState } from "react";
import ReExt, {
  ReExtGrid,
  ReExtPanel,
  ReExtContainer,
  ReExtDateField,
  ReExtCycleButton,
  ReExtFroalaEditorField,
} from "@sencha/reext";

import { users } from "../../constants/users";

export const HomePage = () => {
  const [row, setRow] = useState(null);
  const [data, setData] = useState(users);

  const handleSave = (addUserInfo) => {
    console.log("data", addUserInfo);

    setData((prevData) => [...prevData, addUserInfo]);
  };

  return (
    <div>
      <ReExtContainer
        style={{
          height: "320px",
        }}
      >
        <ReExtGrid
          columns={[
            { text: "Name", dataIndex: "name", width: 120 },
            { text: "Email", dataIndex: "email", flex: 1 },
            { text: "Phone", dataIndex: "phone", width: 120 },
          ]}
          store={{ data: data }}
          onSelect={(grid, selected) => {
            if (selected[0] === undefined) {
              setRow(selected.data);
            } else {
              setRow(selected[0].data);
            }
          }}
        />
      </ReExtContainer>

      {row ? (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            marginTop: "24px",
            gap: "8px",
          }}
        >
          <ReExt xtype="label" config={{ html: `name: ${row?.name}` }} />
          <ReExt xtype="label" config={{ html: `email: ${row?.email}` }} />
          <ReExt xtype="label" config={{ html: `phone: ${row?.phone}` }} />

          <ReExt
            xtype="textfield"
            config={{
              label: "First Name",
              placeholder: "enter first name",
              value: row?.name,
            }}
          />
          <ReExt
            xtype="textareafield"
            config={{
              label: "First Name",
              placeholder: "enter first name",
              value: row?.email,
            }}
          />
          <ReExtDateField config={{ value: new Date() }} />
          <ReExtCycleButton
            showText={true}
            prependText="View as "
            menu={{
              items: [
                { text: "Text only", iconCls: "view-text", checked: true },
                { text: "HTML", iconCls: "view-html", checked: false },
                { text: "PDF", iconCls: "view-pdf", checked: false },
              ],
            }}
            changeHandler={function (cycleBtn, activeItem) {
              console.log("activeItem.text", activeItem.text);
            }}
          />
          <ReExtFroalaEditorField
            style={{ overflow: "scroll" }}
            config={{ text: "Reason" }}
          />
        </div>
      ) : (
        <div />
      )}

      <ReExt
        xtype="panel"
        style={{ height: 240, marginTop: "24px" }}
        config={{
          title: "Add a new row",
          layout: "vbox",
          bodyPadding: 16,
          items: [
            {
              xtype: "container",
              flex: 1,
              items: [
                {
                  xtype: "textfield",
                  reference: "name",
                  placeholder: "enter name",
                  label: "Name",
                },
                {
                  xtype: "textfield",
                  reference: "email",
                  placeholder: "enter email",
                  label: "Email",
                },
                {
                  xtype: "textfield",
                  reference: "phone",
                  placeholder: "enter phone",
                  label: "Phone",
                },
              ],
            },
            {
              xtype: "container",
              items: [
                {
                  xtype: "button",
                  text: "Clear",
                  style: { marginRight: "16px" },
                },
                {
                  xtype: "button",
                  text: "Save",
                  minWidth: 98,
                  handler: () => {
                    handleSave({
                      name: `John Doe ${data.length + 1}`,
                      email: "john.doe@example.com",
                      phone: new Date().getTime().toString(),
                    });
                  },
                },
              ],
            },
          ],
        }}
      />
    </div>
  );
};
