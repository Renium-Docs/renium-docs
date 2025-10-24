---
sidebar_position: 5
---

# SQL Snippets and Templates

This page contains SQL code templates that comply with Octo Db naming conventions. You can use the following templates to quickly create SQL objects that adhere to standards.

---

## Table Templates

### Standard Table Creation

```sql
-- Template: Tb_[Rn|RnPj]_[ModuleCode]_[TableName]
CREATE TABLE Tb_Rn_[ModuleCode]_[TableName] (
    [TableName]Id INT IDENTITY(1,1) NOT NULL,
    [TableName]Code NVARCHAR(50) NOT NULL,
    [TableName]Name NVARCHAR(100) NOT NULL,
    Notes NVARCHAR(250) NULL,
    IsActive BIT NOT NULL,
    AddDate DATETIME NOT NULL,
    UpdateDate DATETIME NULL,
    AddUserId INT NOT NULL,
    UpdateUserId INT NULL,
    CONSTRAINT PK_Tb_Rn_[ModuleCode]_[TableName] PRIMARY KEY CLUSTERED ([TableName]Id)
)
```

### Example: Table for Inventory Module

```sql
CREATE TABLE Tb_Rn_Inventory_Items (
    ItemId INT IDENTITY(1,1) NOT NULL,
    ItemCode NVARCHAR(50) NOT NULL,
    ItemName NVARCHAR(100) NOT NULL,
    ItemType NVARCHAR(50) NULL,
    Notes NVARCHAR(250) NULL,
    IsActive BIT NOT NULL,
    AddDate DATETIME NOT NULL,
    UpdateDate DATETIME NULL,
    AddUserId INT NOT NULL,
    UpdateUserId INT NULL,
    CONSTRAINT PK_Tb_Rn_Inventory_Items PRIMARY KEY CLUSTERED (ItemId)
)
```

---

## View Templates

### Primary View (Pv)

```sql
-- Template: Pv_[Rn|RnPj]_[ModuleCode]_[ViewName]
CREATE VIEW Pv_Rn_[ModuleCode]_[ViewName]
AS
SELECT 
    t.[TableName]Id,
    t.[TableName]Code,
    t.[TableName]Name,
    t.IsActive,
    t.AddDate,
    u.UserName AS AddUserName
FROM Tb_Rn_[ModuleCode]_[TableName] t
LEFT JOIN Tb_Rn_System_Users u ON t.AddUserId = u.UserId
WHERE t.IsActive = 1
```

---

## Stored Procedure Templates

### Insert Stored Procedure

```sql
-- Template: Sp_[Rn|RnPj]_[ModuleCode]_Insert[TableName]
CREATE PROCEDURE Sp_Rn_[ModuleCode]_Insert[TableName]
    @[TableName]Code NVARCHAR(50),
    @[TableName]Name NVARCHAR(100),
    @Notes NVARCHAR(250) = NULL,
    @IsActive BIT = 1,
    @AddUserId INT,
    @[TableName]Id INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO Tb_Rn_[ModuleCode]_[TableName] (
        [TableName]Code,
        [TableName]Name,
        Notes,
        IsActive,
        AddDate,
        AddUserId
    )
    VALUES (
        @[TableName]Code,
        @[TableName]Name,
        @Notes,
        @IsActive,
        GETDATE(),
        @AddUserId
    )
    
    SET @[TableName]Id = SCOPE_IDENTITY()
END
```

### Update Stored Procedure

```sql
-- Template: Sp_[Rn|RnPj]_[ModuleCode]_Update[TableName]
CREATE PROCEDURE Sp_Rn_[ModuleCode]_Update[TableName]
    @[TableName]Id INT,
    @[TableName]Code NVARCHAR(50),
    @[TableName]Name NVARCHAR(100),
    @Notes NVARCHAR(250) = NULL,
    @IsActive BIT,
    @UpdateUserId INT,
    @BypassTrig BIT = 0
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE Tb_Rn_[ModuleCode]_[TableName]
    SET 
        [TableName]Code = @[TableName]Code,
        [TableName]Name = @[TableName]Name,
        Notes = @Notes,
        IsActive = @IsActive,
        UpdateDate = GETDATE(),
        UpdateUserId = @UpdateUserId,
        BypassTrig = @BypassTrig
    WHERE [TableName]Id = @[TableName]Id
END
```

### Select Stored Procedure

```sql
-- Template: Sp_[Rn|RnPj]_[ModuleCode]_Get[TableName]
CREATE PROCEDURE Sp_Rn_[ModuleCode]_Get[TableName]
    @[TableName]Id INT = NULL,
    @IsActive BIT = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        [TableName]Id,
        [TableName]Code,
        [TableName]Name,
        Notes,
        IsActive,
        AddDate,
        UpdateDate,
        AddUserId,
        UpdateUserId
    FROM Tb_Rn_[ModuleCode]_[TableName]
    WHERE (@[TableName]Id IS NULL OR [TableName]Id = @[TableName]Id)
        AND (@IsActive IS NULL OR IsActive = @IsActive)
END
```

### Delete Stored Procedure

```sql
-- Template: Sp_[Rn|RnPj]_[ModuleCode]_Delete[TableName]
CREATE PROCEDURE Sp_Rn_[ModuleCode]_Delete[TableName]
    @[TableName]Id INT,
    @UpdateUserId INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Soft delete
    UPDATE Tb_Rn_[ModuleCode]_[TableName]
    SET 
        IsActive = 0,
        UpdateDate = GETDATE(),
        UpdateUserId = @UpdateUserId
    WHERE [TableName]Id = @[TableName]Id
END
```

---

## Function Templates

### Scalar Function

```sql
-- Template: Fn_[Rn|RnPj]_[ModuleCode]_[FunctionName]
CREATE FUNCTION Fn_Rn_[ModuleCode]_[FunctionName]
(
    @Param1 INT,
    @Param2 NVARCHAR(50)
)
RETURNS NVARCHAR(100)
AS
BEGIN
    DECLARE @Result NVARCHAR(100)
    
    -- Function logic here
    SET @Result = N'Result'
    
    RETURN @Result
END
```

### Table-Valued Function

```sql
-- Template: Fn_[Rn|RnPj]_[ModuleCode]_[FunctionName]
CREATE FUNCTION Fn_Rn_[ModuleCode]_[FunctionName]
(
    @Param1 INT
)
RETURNS TABLE
AS
RETURN
(
    SELECT 
        [TableName]Id,
        [TableName]Code,
        [TableName]Name
    FROM Tb_Rn_[ModuleCode]_[TableName]
    WHERE [TableName]Id = @Param1
)
```

---

## Index Templates

### Non-Clustered Index

```sql
-- Template: Ix_[TableName]_[Column1]_[Column2]
CREATE NONCLUSTERED INDEX Ix_Tb_Rn_[ModuleCode]_[TableName]_[ColumnName]
ON Tb_Rn_[ModuleCode]_[TableName] ([ColumnName])
```

### Unique Index

```sql
-- Template: Uix_[TableName]_[Column1]_[Column2]
CREATE UNIQUE NONCLUSTERED INDEX Uix_Tb_Rn_[ModuleCode]_[TableName]_[ColumnName]
ON Tb_Rn_[ModuleCode]_[TableName] ([ColumnName])
```

---

## Foreign Key Templates

```sql
-- Template: Fk_[TableName]_[RefTableName]_[FieldName]
ALTER TABLE Tb_Rn_[ModuleCode]_[TableName]
ADD CONSTRAINT Fk_Tb_Rn_[ModuleCode]_[TableName]_Tb_Rn_[RefModuleCode]_[RefTableName]_[FieldName]
FOREIGN KEY ([FieldName])
REFERENCES Tb_Rn_[RefModuleCode]_[RefTableName] ([RefFieldName])
```

### Example

```sql
ALTER TABLE Tb_Rn_Sales_Orders
ADD CONSTRAINT Fk_Tb_Rn_Sales_Orders_Tb_Rn_Inventory_Items_ItemId
FOREIGN KEY (ItemId)
REFERENCES Tb_Rn_Inventory_Items (ItemId)
```

---

## Default Constraint Templates

```sql
-- Template: Df_[TableName]_[ColumnName]
ALTER TABLE Tb_Rn_[ModuleCode]_[TableName]
ADD CONSTRAINT Df_Tb_Rn_[ModuleCode]_[TableName]_[ColumnName]
DEFAULT (GETDATE()) FOR [ColumnName]
```

### Example

```sql
ALTER TABLE Tb_Rn_System_Users
ADD CONSTRAINT Df_Tb_Rn_System_Users_IsActive
DEFAULT (1) FOR IsActive
```

---

## Trigger Templates

### Update Trigger

```sql
-- Template: [TableName]_[Operation]
CREATE TRIGGER Tb_Rn_[ModuleCode]_[TableName]_UpdateAudit
ON Tb_Rn_[ModuleCode]_[TableName]
AFTER UPDATE
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Trigger logic here
    -- Check BypassTrig flag if needed
    IF EXISTS (SELECT 1 FROM inserted WHERE BypassTrig = 1)
        RETURN
        
    -- Audit or other operations
END
```

---

## Sequence Templates

```sql
-- Template: S_[TableName]_[FieldName]
CREATE SEQUENCE S_Tb_Rn_[ModuleCode]_[TableName]_[FieldName]
AS INT
START WITH 1
INCREMENT BY 1
MINVALUE 1
MAXVALUE 2147483647
CACHE 50
```

---

## Usage Notes

:::info Tips
- Replace `[ModuleCode]` in templates with the appropriate module code (Sales, Inventory, Production, etc.)
- Replace placeholders like `[TableName]`, `[ViewName]`, `[FunctionName]` with your own object names
- All object names must be in **PascalCase**
- Unicode string literals should be written in `N'...'` format
- Use `DATETIME` for date fields
- Boolean fields should be `BIT` type and start with `Is*`
:::

:::warning Attention
- Before using snippets, review the [Octo Db Naming Conventions](./Octo%20Db%20İsimlendirme.md)
- Use consistent naming for each module
- Do not use Turkish characters
:::

---

## Related Documentation

- [Octo Db Naming Conventions](./Octo%20Db%20İsimlendirme.md)
