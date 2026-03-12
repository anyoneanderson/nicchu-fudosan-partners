"use client";

import { useState, type FormEvent } from "react";

type Dict = {
  contact: {
    name_label: string;
    name_placeholder: string;
    email_label: string;
    email_placeholder: string;
    phone_label: string;
    phone_placeholder: string;
    category_label: string;
    category_relocation: string;
    category_acquisition: string;
    category_chinese_consulting: string;
    category_other: string;
    message_label: string;
    message_placeholder: string;
    submit: string;
    required: string;
    optional: string;
    success_title: string;
    success_message: string;
    error_name: string;
    error_email: string;
    error_email_format: string;
    error_category: string;
    error_message: string;
  };
  [key: string]: unknown;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = ({ dict }: { dict: Dict }) => {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (formData: FormData): Record<string, string> => {
    const errs: Record<string, string> = {};
    if (!formData.get("name")) errs.name = dict.contact.error_name;
    const email = formData.get("email") as string;
    if (!email) {
      errs.email = dict.contact.error_email;
    } else if (!EMAIL_REGEX.test(email)) {
      errs.email = dict.contact.error_email_format;
    }
    if (!formData.get("category")) errs.category = dict.contact.error_category;
    if (!formData.get("message")) errs.message = dict.contact.error_message;
    return errs;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData as unknown as Record<string, string>).toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4 text-accent">&#10003;</div>
        <h2 className="text-2xl font-light tracking-wide mb-4">
          {dict.contact.success_title}
        </h2>
        <p className="text-text-secondary">{dict.contact.success_message}</p>
      </div>
    );
  }

  const categories = [
    { value: "relocation", label: dict.contact.category_relocation },
    { value: "acquisition", label: dict.contact.category_acquisition },
    { value: "chinese_consulting", label: dict.contact.category_chinese_consulting },
    { value: "other", label: dict.contact.category_other },
  ];

  const inputClass =
    "w-full px-4 py-3 bg-white border border-border text-text-primary focus:outline-none focus:border-accent transition-colors";

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <p hidden>
        <input name="bot-field" />
      </p>

      <div className="space-y-8">
        {/* 氏名 */}
        <div>
          <label className="block text-sm tracking-wider text-text-secondary mb-2">
            {dict.contact.name_label}
            <span className="text-accent text-xs ml-2">
              {dict.contact.required}
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder={dict.contact.name_placeholder}
            className={inputClass}
          />
          {errors.name && (
            <p className="text-accent text-sm mt-2">{errors.name}</p>
          )}
        </div>

        {/* メール */}
        <div>
          <label className="block text-sm tracking-wider text-text-secondary mb-2">
            {dict.contact.email_label}
            <span className="text-accent text-xs ml-2">
              {dict.contact.required}
            </span>
          </label>
          <input
            type="email"
            name="email"
            placeholder={dict.contact.email_placeholder}
            className={inputClass}
          />
          {errors.email && (
            <p className="text-accent text-sm mt-2">{errors.email}</p>
          )}
        </div>

        {/* 電話番号 */}
        <div>
          <label className="block text-sm tracking-wider text-text-secondary mb-2">
            {dict.contact.phone_label}
            <span className="text-text-muted text-xs ml-2">
              {dict.contact.optional}
            </span>
          </label>
          <input
            type="tel"
            name="phone"
            placeholder={dict.contact.phone_placeholder}
            className={inputClass}
          />
        </div>

        {/* 種別 */}
        <div>
          <label className="block text-sm tracking-wider text-text-secondary mb-2">
            {dict.contact.category_label}
            <span className="text-accent text-xs ml-2">
              {dict.contact.required}
            </span>
          </label>
          <select name="category" className={inputClass} defaultValue="">
            <option value="" disabled>
              ---
            </option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-accent text-sm mt-2">{errors.category}</p>
          )}
        </div>

        {/* 内容 */}
        <div>
          <label className="block text-sm tracking-wider text-text-secondary mb-2">
            {dict.contact.message_label}
            <span className="text-accent text-xs ml-2">
              {dict.contact.required}
            </span>
          </label>
          <textarea
            name="message"
            rows={5}
            placeholder={dict.contact.message_placeholder}
            className={inputClass}
          />
          {errors.message && (
            <p className="text-accent text-sm mt-2">{errors.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-4 bg-accent text-white tracking-widest uppercase text-sm hover:bg-accent-light transition-all duration-300"
        >
          {dict.contact.submit}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
