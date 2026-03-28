import { cookies } from "next/headers";
import { defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/lib/i18n";

export async function getCurrentLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const storedLocale = cookieStore.get(LOCALE_COOKIE)?.value;

  return isLocale(storedLocale) ? storedLocale : defaultLocale;
}
