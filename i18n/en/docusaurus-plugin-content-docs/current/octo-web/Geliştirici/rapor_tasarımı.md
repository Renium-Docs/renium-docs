---
sidebar_position: 3
---
# Report Design

Report Design allows you to create and view custom reports using system data and the design tool.

## Report Definitions

The *Report Definitions* screen under the *Developer* module lets you view and manage the reports you have defined in detail. From this screen you can:
- Create a new report,
- Edit reports you have previously created,
- Delete reports that are no longer needed.

## Creating a New Report

To create a new report, follow these steps:

1. Click the **Report Designer** button.  
   This action will take you to the **Report Design** screen.  
2. Click the ☰ (**Hamburger menu**) icon in the top-left corner.  
3. From the menu that opens, select **New**.  
   A **blank report page** will be created on the screen.  
4. To save your report, click the ☰ (**Hamburger menu**) icon again.  
5. From the menu, select **Save**.  
6. In the dialog that opens, give your report a meaningful **name** and click **Save** to store it.

:::tip
If you save a report without giving it a name, you may not be able to access it later. It is recommended to use a memorable, descriptive name that reflects the report's content.
:::

### Data Source Connection

To include the data you want to display in your report, you must add it to the *Report Designer* using **SQL queries** against the relevant tables.

To do this:

1. Click the **Field List** tab in the menu on the right.  
2. Click the **Add Query** button next to the **SqlDataSource** heading.  
3. In the dialog that opens, give your query a **name**.  
4. You can type your SQL query directly, or open the **Query Builder** by clicking **Run Query Builder** to work with a visual builder for better visibility of tables and field names.  
5. In the Query Builder, select the fields you want to include in your report from the **View** and **Table** lists on the right.  
6. The fields you select will become available in the report designer.

Imported data is displayed under the **Field List** as a hierarchical structure. From there you can add tables or fields to the design surface using drag-and-drop.

### Designing the Report

- Use the design toolbox on the left to add components to your report (charts, images, text, signature, etc.).  
- In the **Report Explorer**, you can inspect the hierarchical structure of all components in your report. This view helps you manage the overall organization of the report.
