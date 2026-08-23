/**
 * Contacts service.
 * Future REST contract:
 *   GET  /companies/:id/contacts
 *   POST /companies/:id/contacts
 *   GET  /contacts/:id
 *   PUT  /contacts/:id
 *   DELETE /contacts/:id
 */
import { db, delay, nextId } from "@/modules/core/services/mock/db";
import type { Contact, ContactInput } from "@/modules/core/types/crm";

export async function listContacts(): Promise<Contact[]> {
  return delay([...db.contacts]);
}

export async function listCompanyContacts(companyId: string): Promise<Contact[]> {
  return delay(db.contacts.filter((contact) => contact.companyId === companyId));
}

export async function getContact(id: string): Promise<Contact | undefined> {
  return delay(db.contacts.find((contact) => contact.id === id));
}

export async function createContact(input: ContactInput): Promise<Contact> {
  const contact: Contact = { ...input, id: nextId("contact"), createdAt: new Date().toISOString() };
  if (contact.isPrimary) {
    db.contacts = db.contacts.map((item) =>
      item.companyId === contact.companyId ? { ...item, isPrimary: false } : item,
    );
  }
  db.contacts = [contact, ...db.contacts];
  return delay(contact, 120);
}

export async function updateContact(id: string, patch: Partial<ContactInput>): Promise<Contact> {
  const existing = db.contacts.find((contact) => contact.id === id);
  if (!existing) throw new Error("Contact not found");
  const updated = { ...existing, ...patch };
  db.contacts = db.contacts.map((contact) => (contact.id === id ? updated : contact));
  return delay(updated, 120);
}

export async function deleteContact(id: string): Promise<void> {
  db.contacts = db.contacts.filter((contact) => contact.id !== id);
  return delay(undefined, 120);
}
