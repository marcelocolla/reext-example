import React, { useState } from "react";
import ReExt, {
  ReExtButton,
  ReExtGrid,
  ReExtPanel,
  ReExtContainer,
} from "@sencha/reext";

export const HomePage = () => {
  const [row, setRow] = useState(null);
  const [data] = useState([
    {
      name: "Jean Luc",
      email: "jeanluc@enterprise.com",
      phone: "555-111-1111",
    },
    {
      name: "Worf",
      email: "worf@enterprise.com",
      phone: "555-222-2222",
    },
    {
      name: "Deanna",
      email: "deanna@enterprise.com",
      phone: "555-333-3333",
    },
    {
      name: "Data",
      email: "data@enterprise.com",
      phone: "555-444-4444",
    },
  ]);

  return (
    <ReExtPanel config={{ layout: "border" }} style={{ height: "100vh" }}>
      <ReExtContainer
        childRegion="center"
        config={{
          layout: "fit",
        }}
      >
        <ReExtGrid
          columns={[
            { text: "Name", dataIndex: "name", width: 60 },
            { text: "Email", dataIndex: "email", flex: 1 },
            { text: "Phone", dataIndex: "phone", width: 80 },
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
        <ReExtContainer childRegion="east" childWidth={200}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <ReExt
              xtype="displayfield"
              config={{ value: `name: ${row === null ? "" : row.name}` }}
            />
            <ReExt
              xtype="displayfield"
              config={{ value: `email: ${row === null ? "" : row.email}` }}
            />
            <ReExt
              xtype="displayfield"
              config={{ value: `phone: ${row === null ? "" : row.phone}` }}
            />
          </div>
        </ReExtContainer>
      ) : (
        <div />
      )}
    </ReExtPanel>
  );
};
