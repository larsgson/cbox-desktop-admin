import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { getLocaleIso639Letter2 } from './utils/file-functions';

i18n
  .use(reactI18nextModule) // if not using I18nextProvider
  .init({
    lng: getLocaleIso639Letter2(),
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
      bindI18n: 'languageChanged loaded',
      bindStore: 'added removed',
      nsMode: 'default',
    },

    resources: {
      en: {
        translation: {
          selectDrive: 'Select a drive',
          detectedDrive: 'Detected drive',
          detectedDrive_plural: 'Detected drives',
          detectedLocations: 'Detected locations',
          selectInstall: "Select install location",
          prepInstallLoc: "Preparing install location",
          rUSureInstall: "Are you sure you want to install ConnecxtBox here?",
          incompatibilityWarning: "Incompatibility Warning",
          moveSharedFolder: 'All content under the "Shared" folder will be moved to a different location',
          continue: 'continue',
          cancel: 'cancel',
          save: 'save',
          ok: 'OK',
          path: 'path',
          root: 'Root',
          noUSB: 'No connected USB drive detected',
          myChannel: "My Channel",
          audio: "Audio",
          book: "Book",
          book_plural: "Books",
          training: "Training",
          page: "Page",
          page_plural: "Pages",
          test: "Test",
          bible: "Bible",
          video: "Video",
          settings: "Settings",
          about: "About",
          newTitle: "New title",
          mediaType: "Media type",
          language: "Language",
          startNow: "Start Now",
          createChannel: "Create a media channel",
          createChannelComment: "designed for mobile use",
          swDescription: "Admin Application for configuring a ConnectBox",
          channelName: "Channel Name",
          navLang: "Navigation language",
          mediaContentLang: "Media content languages",
          defaultInitLang: "Default initial languages",
          installOnUSB: "Install latest ConnectBox static host files on USB",
          installTest: "Install sample test files on USB",
          setDebugMode: "Open developer tool window",
          featured: "Featured",
          title: "Title",
          mainTitle: "Main title",
          description: "Description",
          descr: "Short description",
          readOL: "Read Out Loud enabled",
          previewInSecondWindow: "A preview is now open in another window",
          id: 'ID',
          fname: 'Filename',
          imgSrc: 'Image sourcefile',
          image: 'Image',
          episode: "Episode",
          episode_plural: "Episodes",
          setPath: "Set Path",
          pathErrMsg1: "Directories outside the selected drive",
          pathErrMsg2: "are not allowed, please select a child directory!",
          selectImage: "Select image",
          imgErrMsg1: "Directories outside the selected drive",
          imgErrMsg2: "are not allowed, please select a child directory!",
          downloading: "Downloading",
          unzipping: "Unzipping",
          unzipError: "Unzip Error: ",
          usbMustBeEmpty: "Existing media content detected! Please use an empty USB",
        },
      },
      de: {
        translation: {
          selectDrive: 'Bitte Laufwerk wählen',
          detectedDrive: 'Erkanntes Laufwerk',
          detectedDrive_plural: 'Erkannte Laufwerke',
          detectedLocations: 'Erkannte Verzeichnisse',
          selectInstall: "Bitte Installationsort auswählen",
          incompatibilityWarning: "Warnung: Inkompatibles Format",
          moveSharedFolder: 'Der gesamte Inhalt des Ordners "Shared" wird an einen anderen Ort verschoben',
          prepInstallLoc: "Installationsort vorbereiten",
          rUSureInstall: "Möchten Sie wirklich hier installieren?",
          continue: 'fortsetzen',
          cancel: 'abbrechen',
          save: 'speichern',
          ok: 'OK',
          path: 'Pfad',
          root: 'Wurzelverzeichnis',
          noUSB: 'USB-Speicher nicht angeschlossen',
          myChannel: "Mein Medienkanal",
          audio: "Audio",
          book: "Buch",
          book_plural: "Bücher",
          training: "Training",
          page: "Seite",
          page_plural: "Seiten",
          test: "Test",
          bible: "Bibel",
          video: "Video",
          settings: "Einstellungen",
          about: "Info",
          newTitle: "Neuer Titel",
          mediaType: "Medientyp",
          language: "Sprache",
          startNow: "Jetzt anfangen",
          createChannel: "Neuer Medienkanal",
          createChannelComment: "optimiert für den mobilen Einsatz",
          swDescription: "Admin Software - um einen ConnectBox zu konfigurieren",
          channelName: "Name des Medienkanals",
          navLang: "Navigationssprache",
          mediaContentLang: "Sprachen der Medieninhalte",
          defaultInitLang: "Voreingestellte Sprachen",
          installOnUSB: "Neusten Updates für statischer ConnectBox Host auf USB Speicher herunterladen",
          installTest: "Beispiel Dateien auf USB Speicher herunterladen",
          setDebugMode: "Entwickler Umgebung öffnen",
          featured: "Ausgewählte Medieninhalte",
          title: "Titel",
          mainTitle: "Haupttitel",
          description: "Beschreibung",
          descr: "Kurzbeschreibung",
          readOL: "Laut Vorlesen aktiviert",
          previewInSecondWindow: "Eine Vorschau ist jetzt in einem anderen Fenster geöffnet",
          id: 'ID',
          fname: 'Dateiname',
          imgSrc: 'Bild Quelldatei',
          image: 'Bild',
          episode: "Folge",
          episode_plural: "Folgen",
          setPath: "Pfad festlegen",
          pathErrMsg1: "Verzeichnisse außerhalb des ausgewählten Laufwerks",
          pathErrMsg2: "sind nicht erlaubt, bitte wählen Sie ein Verzeichnis innerhalb des Laufwerkes!",
          selectImage: "Bild auswählen",
          imgErrMsg1: "Bilder außerhalb des ausgewählten Laufwerks",
          imgErrMsg2: "sind nicht erlaubt, bitte wählen Sie ein Bild innerhalb des Laufwerkes!",
          downloading: "Herunterladen",
          unzipping: "Entpacken",
          unzipError: "Fehler während dem Entpacken",
          usbMustBeEmpty: "Bestehende Medieninhalte erkannt! Bitte benutzen Sie einen leeren USB",
        },
      },
    },
  });

export default i18n;
