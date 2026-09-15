## Datenbank-Export (Pflichtbestandteil der Abgabe)

Ein Dump Ihrer Supabase-Datenbank ist Teil der Abgabe. Er wird direkt im Supabase-Dashboard erzeugt, eine lokale Installation ist nicht nötig:

1. Öffnen Sie im Supabase-Dashboard Ihres Projekts den **SQL Editor**.
2. Fügen Sie das bereitgestellte Skript `export_supabase.sql` (siehe Kursmaterial) vollständig ein und führen Sie es aus.
3. Klicken Sie die Ergebniszelle `export_sql` an, öffnen Sie die erweiterte Zellenansicht und kopieren Sie den gesamten Inhalt. Speichern Sie ihn als `supabase/export.sql` in Ihrem Repository. Nutzen Sie **nicht** „Download CSV“ – dabei gehen die Zeilenumbrüche verloren.

Der Export enthält Ihr Datenbankschema (Tabellen, Constraints, Trigger, Funktionen, RLS-Policies) sowie die aktuellen Tabelleninhalte. Er muss mindestens die angelegten Zeitslots und einige Testbuchungen enthalten. Tabellen ohne Inhalt werden mit `-- keine Daten` markiert. Erstellen Sie den Export erst, wenn Ihr System fertig ist – er soll dem Stand entsprechen, den Sie abgeben.

> **Hinweis:** Am Export ist unmittelbar erkennbar, ob Row Level Security aktiviert ist, welche Policies existieren und ob der Doppelbuchungsschutz auf Datenbankebene umgesetzt wurde. 
