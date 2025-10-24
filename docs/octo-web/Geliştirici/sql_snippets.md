---
sidebar_position: 5
---

# SQL Snippets ve Şablonlar

Bu sayfa, Octo Db İsimlendirme kurallarına uygun SQL kod şablonları içermektedir. Aşağıdaki şablonları kullanarak hızlı ve standartlara uygun SQL nesneleri oluşturabilirsiniz.

---

## Tablo Şablonları

### Standart Tablo Oluşturma

```sql
-- Şablon: Tb_[Rn|RnPj]_[ModulKodu]_[TabloAdi]
CREATE TABLE Tb_Rn_[ModulKodu]_[TabloAdi] (
    [TabloAdi]Id INT IDENTITY(1,1) NOT NULL,
    [TabloAdi]Code NVARCHAR(50) NOT NULL,
    [TabloAdi]Name NVARCHAR(100) NOT NULL,
    Notes NVARCHAR(250) NULL,
    IsActive BIT NOT NULL,
    AddDate DATETIME NOT NULL,
    UpdateDate DATETIME NULL,
    AddUserId INT NOT NULL,
    UpdateUserId INT NULL,
    CONSTRAINT PK_Tb_Rn_[ModulKodu]_[TabloAdi] PRIMARY KEY CLUSTERED ([TabloAdi]Id)
)
```

### Örnek: Inventory Modülü İçin Tablo

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

## View Şablonları

### Primary View (Pv)

```sql
-- Şablon: Pv_[Rn|RnPj]_[ModulKodu]_[ViewAdi]
CREATE VIEW Pv_Rn_[ModulKodu]_[ViewAdi]
AS
SELECT 
    t.[TabloAdi]Id,
    t.[TabloAdi]Code,
    t.[TabloAdi]Name,
    t.IsActive,
    t.AddDate,
    u.UserName AS AddUserName
FROM Tb_Rn_[ModulKodu]_[TabloAdi] t
LEFT JOIN Tb_Rn_System_Users u ON t.AddUserId = u.UserId
WHERE t.IsActive = 1
```

---

## Stored Procedure Şablonları

### Insert Stored Procedure

```sql
-- Şablon: Sp_[Rn|RnPj]_[ModulKodu]_Insert[TabloAdi]
CREATE PROCEDURE Sp_Rn_[ModulKodu]_Insert[TabloAdi]
    @[TabloAdi]Code NVARCHAR(50),
    @[TabloAdi]Name NVARCHAR(100),
    @Notes NVARCHAR(250) = NULL,
    @IsActive BIT = 1,
    @AddUserId INT,
    @[TabloAdi]Id INT OUTPUT
AS
BEGIN
    SET NOCOUNT ON;
    
    INSERT INTO Tb_Rn_[ModulKodu]_[TabloAdi] (
        [TabloAdi]Code,
        [TabloAdi]Name,
        Notes,
        IsActive,
        AddDate,
        AddUserId
    )
    VALUES (
        @[TabloAdi]Code,
        @[TabloAdi]Name,
        @Notes,
        @IsActive,
        GETDATE(),
        @AddUserId
    )
    
    SET @[TabloAdi]Id = SCOPE_IDENTITY()
END
```

### Update Stored Procedure

```sql
-- Şablon: Sp_[Rn|RnPj]_[ModulKodu]_Update[TabloAdi]
CREATE PROCEDURE Sp_Rn_[ModulKodu]_Update[TabloAdi]
    @[TabloAdi]Id INT,
    @[TabloAdi]Code NVARCHAR(50),
    @[TabloAdi]Name NVARCHAR(100),
    @Notes NVARCHAR(250) = NULL,
    @IsActive BIT,
    @UpdateUserId INT,
    @BypassTrig BIT = 0
AS
BEGIN
    SET NOCOUNT ON;
    
    UPDATE Tb_Rn_[ModulKodu]_[TabloAdi]
    SET 
        [TabloAdi]Code = @[TabloAdi]Code,
        [TabloAdi]Name = @[TabloAdi]Name,
        Notes = @Notes,
        IsActive = @IsActive,
        UpdateDate = GETDATE(),
        UpdateUserId = @UpdateUserId,
        BypassTrig = @BypassTrig
    WHERE [TabloAdi]Id = @[TabloAdi]Id
END
```

### Select Stored Procedure

```sql
-- Şablon: Sp_[Rn|RnPj]_[ModulKodu]_Get[TabloAdi]
CREATE PROCEDURE Sp_Rn_[ModulKodu]_Get[TabloAdi]
    @[TabloAdi]Id INT = NULL,
    @IsActive BIT = NULL
AS
BEGIN
    SET NOCOUNT ON;
    
    SELECT 
        [TabloAdi]Id,
        [TabloAdi]Code,
        [TabloAdi]Name,
        Notes,
        IsActive,
        AddDate,
        UpdateDate,
        AddUserId,
        UpdateUserId
    FROM Tb_Rn_[ModulKodu]_[TabloAdi]
    WHERE (@[TabloAdi]Id IS NULL OR [TabloAdi]Id = @[TabloAdi]Id)
        AND (@IsActive IS NULL OR IsActive = @IsActive)
END
```

### Delete Stored Procedure

```sql
-- Şablon: Sp_[Rn|RnPj]_[ModulKodu]_Delete[TabloAdi]
CREATE PROCEDURE Sp_Rn_[ModulKodu]_Delete[TabloAdi]
    @[TabloAdi]Id INT,
    @UpdateUserId INT
AS
BEGIN
    SET NOCOUNT ON;
    
    -- Soft delete
    UPDATE Tb_Rn_[ModulKodu]_[TabloAdi]
    SET 
        IsActive = 0,
        UpdateDate = GETDATE(),
        UpdateUserId = @UpdateUserId
    WHERE [TabloAdi]Id = @[TabloAdi]Id
END
```

---

## Function Şablonları

### Scalar Function

```sql
-- Şablon: Fn_[Rn|RnPj]_[ModulKodu]_[FunctionAdi]
CREATE FUNCTION Fn_Rn_[ModulKodu]_[FunctionAdi]
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
-- Şablon: Fn_[Rn|RnPj]_[ModulKodu]_[FunctionAdi]
CREATE FUNCTION Fn_Rn_[ModulKodu]_[FunctionAdi]
(
    @Param1 INT
)
RETURNS TABLE
AS
RETURN
(
    SELECT 
        [TabloAdi]Id,
        [TabloAdi]Code,
        [TabloAdi]Name
    FROM Tb_Rn_[ModulKodu]_[TabloAdi]
    WHERE [TabloAdi]Id = @Param1
)
```

---

## Index Şablonları

### Non-Clustered Index

```sql
-- Şablon: Ix_[TabloAdi]_[Kolon1]_[Kolon2]
CREATE NONCLUSTERED INDEX Ix_Tb_Rn_[ModulKodu]_[TabloAdi]_[KolonAdi]
ON Tb_Rn_[ModulKodu]_[TabloAdi] ([KolonAdi])
```

### Unique Index

```sql
-- Şablon: Uix_[TabloAdi]_[Kolon1]_[Kolon2]
CREATE UNIQUE NONCLUSTERED INDEX Uix_Tb_Rn_[ModulKodu]_[TabloAdi]_[KolonAdi]
ON Tb_Rn_[ModulKodu]_[TabloAdi] ([KolonAdi])
```

---

## Foreign Key Şablonları

```sql
-- Şablon: Fk_[TabloAdi]_[RefTabloAdi]_[AlanAdi]
ALTER TABLE Tb_Rn_[ModulKodu]_[TabloAdi]
ADD CONSTRAINT Fk_Tb_Rn_[ModulKodu]_[TabloAdi]_Tb_Rn_[RefModulKodu]_[RefTabloAdi]_[AlanAdi]
FOREIGN KEY ([AlanAdi])
REFERENCES Tb_Rn_[RefModulKodu]_[RefTabloAdi] ([RefAlanAdi])
```

### Örnek

```sql
ALTER TABLE Tb_Rn_Sales_Orders
ADD CONSTRAINT Fk_Tb_Rn_Sales_Orders_Tb_Rn_Inventory_Items_ItemId
FOREIGN KEY (ItemId)
REFERENCES Tb_Rn_Inventory_Items (ItemId)
```

---

## Default Constraint Şablonları

```sql
-- Şablon: Df_[TabloAdi]_[KolonAdi]
ALTER TABLE Tb_Rn_[ModulKodu]_[TabloAdi]
ADD CONSTRAINT Df_Tb_Rn_[ModulKodu]_[TabloAdi]_[KolonAdi]
DEFAULT (GETDATE()) FOR [KolonAdi]
```

### Örnek

```sql
ALTER TABLE Tb_Rn_System_Users
ADD CONSTRAINT Df_Tb_Rn_System_Users_IsActive
DEFAULT (1) FOR IsActive
```

---

## Trigger Şablonları

### Update Trigger

```sql
-- Şablon: [TabloAdi]_[Islev]
CREATE TRIGGER Tb_Rn_[ModulKodu]_[TabloAdi]_UpdateAudit
ON Tb_Rn_[ModulKodu]_[TabloAdi]
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

## Sequence Şablonları

```sql
-- Şablon: S_[TabloAdi]_[AlanAdi]
CREATE SEQUENCE S_Tb_Rn_[ModulKodu]_[TabloAdi]_[AlanAdi]
AS INT
START WITH 1
INCREMENT BY 1
MINVALUE 1
MAXVALUE 2147483647
CACHE 50
```

---

## Kullanım Notları

:::info İpuçları
- Şablonlardaki `[ModulKodu]` yerine ilgili modül kodunu yazın (Sales, Inventory, Production, vb.)
- `[TabloAdi]`, `[ViewAdi]`, `[FunctionAdi]` gibi placeholder'ları kendi nesne adlarınızla değiştirin
- Tüm nesne adları **PascalCase** olmalıdır
- Unicode string sabitleri `N'...'` formatında yazılmalıdır
- Tarih alanları için `DATETIME` tercih edilir
- Mantıksal alanlar `BIT` tipinde ve `Is*` ile başlamalıdır
:::

:::warning Dikkat
- Snippet'ları kullanmadan önce [Octo Db İsimlendirme](./Octo%20Db%20İsimlendirme.md) kurallarını gözden geçirin
- Her modül için tutarlı isimlendirme kullanın
- Türkçe karakter kullanmayın
:::

---

## İlgili Dökümanlar

- [Octo Db İsimlendirme Kuralları](./Octo%20Db%20İsimlendirme.md)
