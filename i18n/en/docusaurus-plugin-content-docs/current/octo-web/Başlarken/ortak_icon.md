---
sidebar_position: 4
title: Common Icons
---

# Common Icons

The table below defines the most frequently used icons in Octo.

### Overview
| Icon | Description |
|:--:|:--|
| <i class="dxbl-image fa-regular fa-file image"></i> | **[New Record](#new-record)** — Creates a new record; the user and creation date are logged. |
| <i class="dxbl-image fa-regular fa-pen-to-square image"></i> | **[Edit](#edit)** — Edits the selected record; updating user and date are logged. |
| <i class="dxbl-image fa-regular fa-trash-can image"></i> | **[Delete](#delete)** — Deletes the selected record (permissions apply). |
| <i class="fa-solid fa-arrow-rotate-right"></i> | **[Refresh](#refresh)** — Reloads the table/grid data. |
| <i class="fa-solid fa-caret-down"></i> | **[Dropdown](#dropdown)** — Opens the library source for selectable fields; data can be inspected or edited based on permissions. |
| <i class="fa-solid fa-ellipsis"></i> | **[More Actions (…) ](#more-actions)** — Provides access to related/linked records. |
| <i class="fa-solid fa-up-right-from-square"></i> | **[Record Link](#external-link)** — Takes you to the definition of the value; record can be examined in detail. |
| <i class="dxbl-image fa-solid fa-table dxbl-context-menu-item-icon"></i> | **[Table Action](#table-action)** — Opens a new screen with the selected rows. |
| <i class="dxbl-image fa-regular fa-solid fa-bolt"></i> | **[Action without Prompt](#action-without-prompt)** — Executes without asking for confirmation. |
| <i class="fa-regular fa-square-bolt"></i> | **[Action with Prompt](#action-with-prompt)** — Asks user for input before execution. |

---

### <i class="dxbl-image fa-regular fa-file image"></i>  New Record

Creates a new record/document. Clicking opens a blank form or row; fill mandatory fields and click **Save** to complete. Default values and numbering may be automatically assigned by system settings.  
**Audit:** *Creating user and date* are logged.  
**Shortcut:** `F2`  
**When to use:** Creating new customer, order, work order, etc.  
**Tip:** Mandatory fields are marked with an asterisk (*); track missing fields via the warning bar.

---

### <i class="dxbl-image fa-regular fa-pen-to-square image"></i>  Edit

Opens the selected record in edit mode. Some fields may be locked depending on status and permissions.  
**Audit:** *Updating user and date* are logged.  
**When to use:** Updating fields like price, delivery date, description, etc.  
**Tip:** Changes are not auto-saved; click **Save** before closing the form.

---

### <i class="dxbl-image fa-regular fa-trash-can image"></i>  Delete

Deletes the selected record. Most screens do not allow undo or only allow users with permissions.  
**When to use:** Removing incorrect, test, or cancelled records.  
**Warning:** Deleting may affect related child records (rows, attachments, movements). Check relation warnings before deletion.

---

### <i class="fa-solid fa-arrow-rotate-right"></i>  Refresh

Reloads the table/grid from the server.  
**What changes:** Data is updated; your current filters and sorting preferences are preserved.  
**Tip:** Use to see updates made by other users; no need to reload the entire page.

---

### <i class="fa-solid fa-caret-down"></i>  Dropdown

Opens the list of options tied to a field or button.  
**When to use:** Status selection, type/subtype selection, quick filtering.  
**Tip:** Start typing to search the list; faster for long lists.

---

### <i class="fa-solid fa-ellipsis"></i>  More Actions (…)

1. Shows context-sensitive actions not visible in the toolbar.  
2. *Selectable fields lead to library sources.* Data can be inspected or edited based on permissions.  
**Examples:** “Download PDF”, “Movements”, “Print Label”, “Copy”.  
**Tip:** Menu content changes based on selected objects; select the object first.

---

### <i class="fa-solid fa-up-right-from-square"></i>  External Link

Takes you to the definition of the value so the record can be inspected in detail.  

**Examples:** Product description, customer profile, order document, etc.  
**Security:** Only visible to authorized users.

---

### <i class="dxbl-image fa-solid fa-table dxbl-context-menu-item-icon"></i>  Table Action

Displays related table information for the selected rows. Does not perform actions; accelerates access to data.  
**Examples:** Product row showing product movements.

---

### <i class="dxbl-image fa-regular fa-solid fa-bolt"></i>  Action without Prompt

Executes a data operation without asking for user input.  
**Examples:** “Recalculate”, “Approve Record”, “Generate Label”.

---

### <i class="fa-regular fa-square-bolt"></i>  Action with Prompt

Opens a parameter form before execution.  
**Examples:** “Ship” (requires date and vehicle), “Close” (requires note), “Cancel” (requires reason).