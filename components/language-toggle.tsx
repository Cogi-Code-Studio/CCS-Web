"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { setLocalePreference } from "@/app/actions";
import type { Locale } from "@/lib/i18n";

type LanguageToggleProps = {
  locale: Locale;
  label: string;
};

export function LanguageToggle({ locale, label }: LanguageToggleProps) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const setLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    startTransition(() => {
      void setLocalePreference(nextLocale).then(() => {
        router.refresh();
      });
    });
  };

  return (
    <div aria-label={label} className="locale-toggle" role="group">
      {(["en", "ko"] as const).map((option) => (
        <button
          key={option}
          aria-pressed={locale === option}
          className="locale-toggle__option"
          data-active={locale === option}
          disabled={isPending}
          onClick={() => setLocale(option)}
          type="button"
        >
          {option.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
