import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import axios from "axios";
import { useState } from "react";
import styles from "./PrayerTimeMount.module.css";
import download from "../../assets/download.svg";

interface HijriDate {
  date: string;
}
interface GregorianDate {
  date: string;
}

interface DateData {
  gregorian: GregorianDate;
  hijri: HijriDate;
}

interface Timings {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface PrayerMountProps {
  city: string;
  year: string;
  monthNumber: string;
  monthName: string;
}

interface PrayerTimeMountProps {
  prayerMount: PrayerMountProps;
}

interface DayData {
  date: DateData;
  timings: Timings;
}

const PrayerTimeMount: React.FC<PrayerTimeMountProps> = ({ prayerMount }) => {
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const generatePDF = async () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 300);

    try {
      const url = `https://api.aladhan.com/v1/hijriCalendarByCity/${prayerMount.year}/${prayerMount.monthNumber}?city=${prayerMount.city}&country=MA`;
      const response = await axios.get<{ data: DayData[] }>(url);
      const data = response.data.data;

      const doc = new jsPDF();

      const removeDiacritics = (str: string) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      };

      doc.setFontSize(18);
      doc.text(
        `Prayer Times in ${prayerMount.city} in ${removeDiacritics(
          prayerMount.monthName
        )} ${prayerMount.year}`,
        10,
        10
      );

      // Prepare the table content
      const tableContent = data.map((day) => [
        day.date.hijri.date,
        day.date.gregorian.date,
        day.timings.Fajr.split(" ")[0],
        day.timings.Sunrise.split(" ")[0],
        day.timings.Dhuhr.split(" ")[0],
        day.timings.Asr.split(" ")[0],
        day.timings.Maghrib.split(" ")[0],
        day.timings.Isha.split(" ")[0],
      ]);

      const tableHeaders = [
        "Hijri Date",
        "Gregorian Date",
        "Fajr",
        "Sunrise",
        "Dhuhr",
        "Asr",
        "Maghrib",
        "Isha",
      ];

      // Add the table to the PDF
      autoTable(doc, {
        head: [tableHeaders],
        body: tableContent,
        startY: 20,
      });

      // Open the PDF in a new tab
      const pdfDataUri = doc.output("bloburl");
      window.open(pdfDataUri, "_blank");
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

  return (
    <div className={styles.prayertimeMount}>
      <h5>
        Prayer Times in {prayerMount.city} in {prayerMount.monthName}{" "}
        {prayerMount.year}
      </h5>
      <button
        className={isAnimating ? styles.animateClick : ""}
        onClick={generatePDF}
      >
        <img src={download} alt="Download PDF" />
      </button>
    </div>
  );
};

export default PrayerTimeMount;
