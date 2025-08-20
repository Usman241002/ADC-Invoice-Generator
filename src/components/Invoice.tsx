import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import logo from "../assets/LOGO.jpg";

// PDF styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 30,
    fontFamily: "Helvetica",
    fontSize: 10,
  },
  section: {
    marginBottom: 10,
    padding: 5,
  },
  header: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "bold",
  },
  subHeader: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "bold",
  },
  text: {
    fontSize: 10,
    marginBottom: 2,
    lineHeight: 1.2,
  },
  boldText: {
    fontWeight: "bold",
  },
  // Style for the placeholder lines
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#000000",
    marginTop: 5,
    marginBottom: 5,
  },
  // Styles for the tables
  table: {
    width: "auto",
    marginBottom: 10,
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderWidth: 0.5,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#000",
  },
  tableColHeader: {
    width: "25%", // Adjust based on content
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderWidth: 0.5,
    padding: 5,
    backgroundColor: "#f2f2f2",
    textAlign: "center",
  },
  tableCol: {
    width: "25%", // Adjust based on content
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderWidth: 0.5,
    padding: 5,
  },
  tableCell: {
    margin: "auto",
    fontSize: 9,
  },
  fullWidthCell: {
    width: "100%",
    borderStyle: "solid",
    borderColor: "#bfbfbf",
    borderBottomWidth: 0.5,
    borderRightWidth: 0.5,
    borderWidth: 0.5,
    padding: 5,
  },
  centeredText: {
    textAlign: "center",
  },
  rightAlignText: {
    textAlign: "right",
  },
  // Styles for the ADC logo, replace with actual image sources if available
  logo: {
    width: 100,
    height: 40,
    marginBottom: 10,
    alignSelf: "center", // Center the logo horizontally
  },
  footer: {
    fontSize: 8,
    textAlign: "center",
    marginTop: 20,
    lineHeight: 1.5,
  },
});

// A helper function to create a blank line
const BlankLine = ({ width = "100%" }) => (
  <View style={[styles.line, { width }]} />
);

// PDF document structure
export default function Invoice({
  formData,
}: {
  formData: {
    client: Record<string, string | number | Date>;
    invoice: Record<string, string | number | Date>;
    vehicle: Record<string, string | number | Date>;
  };
}) {
  const { client } = formData;
  return (
    <PDFViewer width="100%" height="100%">
      <Document>
        {/* Page 1 */}
        <Page size="A4" style={styles.page}>
          {/* ADC Logo (Placeholder) */}

          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={styles.header}>ACCIDENT DIRECT CLAIMS</Text>
            <Image src={logo} style={{ width: "120px", height: "85px" }} />
          </View>

          <View style={styles.section}>
            {/* Row 1 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#000",
              }}
            >
              <Text>
                <Text>FULL NAME</Text>
                <Text>MR TEDRUS GEBREMESKEL</Text>
              </Text>

              <Text>
                <Text>DATE OF BIRTH</Text>
                <Text>16/01/1985</Text>
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#000",
              }}
            >
              <Text>ADDRESS</Text>
              <Text>46 ARMFIELD STREET</Text>
              <Text>DRIVING LICENCE NO</Text>
              <Text>GEBRE801165T99FA</Text>
            </View>
            {/* Row 3 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#000",
              }}
            >
              <Text></Text>
              <Text>COVENTRY</Text>
              <Text>LICENSING ISSUING AUTHORITY</Text>
              <Text>DVLA UK</Text>
            </View>
            {/* Row 4 */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                borderBottomWidth: 1,
                borderBottomColor: "#000",
              }}
            >
              <Text>POSTCODE</Text>
              <Text>CV6 7GE</Text>
              <Text>DATE OF EXPIRY</Text>
              <Text>17/10/2032</Text>
            </View>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              (a) Have you any physical defect or infirmity?{" ".repeat(70)}
              YES/NO
            </Text>
            <Text style={styles.text}>
              (b) Have you been convicted or have a prosecution pending for any
              motoring offence or has your licence been suspended or endorsed?
              {" ".repeat(1)}YES/NO
            </Text>
            <Text style={styles.text}>
              (c) Have you been refused, declined motor insurance or increased
              premium or terms imposed?{" ".repeat(20)}YES/NO
            </Text>
            <Text style={styles.text}>
              If answer is yes to any above please give details
            </Text>
            <BlankLine />
          </View>

          <View style={styles.section}>
            <Text style={styles.subHeader}>
              Purpose for which vehicle will be used
            </Text>
            <BlankLine />
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              I hereby warrant the truth of the above statements and I declare
              that I have withheld no information whatsoever which might and in
              a way to increase the risk of the insurers or influence the
              acceptance of this proposal. I agree that this proposal shall be
              the basis of the contract between me and the insurers and I
              further agree to be bound by terms and conditions and exceptions
              of the policy, which I have the opportunity to see and read. I
              further declare that my occupation and personal details and
              driving do not render me eligible to hire.
            </Text>
          </View>

          <Text style={styles.subHeader}>Vehicle Details</Text>
          <View style={styles.section}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Make</Text>
              {" ".repeat(15)}TOYOTA{" ".repeat(20)}
              <Text style={styles.boldText}>Model</Text>
              {" ".repeat(15)}PRIUS{" ".repeat(20)}
              <Text style={styles.boldText}>Registration</Text>
              {" ".repeat(10)}FX16JOA
            </Text>
          </View>

          {/* Date & Time Table */}

          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>AM / PM</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>13</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>08</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>25</Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>Time</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>Day</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>Month</Text>
              </View>
              <View style={styles.tableColHeader}>
                <Text style={styles.tableCell}>Year</Text>
              </View>
            </View>
          </View>

          <Text style={styles.subHeader}>Hire Payments</Text>
          <View style={styles.section}>
            <Text style={styles.text}>
              The Rental of £29.71 per day exc. VAT at the prevailing rate and
              CDW of £00.00 per a day exc. VAT at the prevailing rate,
              multiplied by the number of days of hire/rental (maximum 89 days)
              the Hirer shall pay to the lessor by one single payment within 11
              months beginning with the date of this agreement.
            </Text>
            <Text style={styles.text}>
              On termination of the hire/rental the Hirer will payment the
              lessor an excess mileage charge at the rate of{" ".repeat(20)}
              pence per mile.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>
                I ACCEPT AND AGREE THAT THE FINANCIAL DETAILS ABOVE HAVE BEEN
                COMPLETED PRIOR TO MY SIGNATURE. I FURTHER ACCEPT THE ABOVE
                CHARGES ARE MY RESPONSIBILITY AT ALL TIMES.
              </Text>
            </Text>
            <Text style={styles.text}>Signed{" ".repeat(40)}</Text>
            <BlankLine width="40%" />
          </View>

          {/* Financial Summary Table */}
          <View style={styles.table}>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>89 DAYS @ £29.71</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 2644.57
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  Collision Damage Waiver: @£15.00
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 00.00
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  Automatic Vehicle Rate: Days@£10.00
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 00.00
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Delivery and Collection</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 00.00
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Sub Total</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 2644.57
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>VAT @20.00%</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 661.14
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Total</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 3305.71
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Deposit</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 250.00
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>Credit</Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 3305.71
                </Text>
              </View>
            </View>
            <View style={styles.tableRow}>
              <View style={styles.tableCol}>
                <Text style={styles.tableCell}>
                  Weekly Payment Including VAT
                </Text>
              </View>
              <View style={styles.tableCol}>
                <Text style={[styles.tableCell, styles.rightAlignText]}>
                  £ 260.00
                </Text>
              </View>
            </View>
          </View>
        </Page>

        {/* Page 2 - Terms and Conditions */}
        <Page size="A4" style={styles.page}>
          <Text style={styles.subHeader}>Terms and Conditions</Text>

          <Text style={styles.boldText}>Charges</Text>
          <View style={styles.section}>
            <Text style={styles.text}>
              I agree and acceptance to return the vehicle in the same
              condition.I acceptance full responsibility and agree to pay on
              demand for:
            </Text>
            <Text style={styles.text}>
              {" "}
              a) Any additional damage whatsoever;
            </Text>
            <Text style={styles.text}>
              {" "}
              b) Any policy excess applicable (£500);
            </Text>
            <Text style={styles.text}> c) Any fuel required;</Text>
            <Text style={styles.text}> d) Valeting charge as required;</Text>
            <Text style={styles.text}>
              i. I have read and understood the terms of conditions appearing on
              the front and Reverse hereof. I fully agree to be bound by them,
            </Text>
            <Text style={styles.text}>
              ii. All charges are exclusive of VAT at the prevailing rate of
              20%.
            </Text>
            <Text style={styles.text}>
              iii. I authorise the lessor to process a credit card voucher for
              the cost of hire above.
            </Text>
            <Text style={styles.text}>
              iv. Termination after the period provided in the cancelation
              clause the Hirer may Terminate this agreement at any time by
              returning the vehicle to the lessor.
            </Text>
            <Text style={styles.text}>
              v. I acknowledge having received a copy of this agreement.
            </Text>
            <Text style={styles.text}>
              vi. I confirm that this agreement has been completed prior to my
              signature.
            </Text>
            <Text style={styles.text}>
              vii. I have received a copy of the pre-contract information and
              notice of my right to Cancel this agreement
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              Hirer Signature:{" ".repeat(40)}Date{" ".repeat(20)}
            </Text>
            <BlankLine width="50%" />
            <Text style={styles.text}>
              Name (Please print):{" ".repeat(40)}
            </Text>
            <BlankLine width="50%" />
            <Text style={styles.text}>
              For himself/herself (where applicable) as a duly authorised
              representative of the Hirer
            </Text>
            <Text style={styles.text}>
              Owner Signature:{" ".repeat(40)}Date{" ".repeat(20)}
            </Text>
            <BlankLine width="50%" />
          </View>

          <Text style={styles.text}>
            SHORT TERM HIRE AGREEMENT/INVOICE{" ".repeat(10)}Period of agreement
            not to exceed 89 days VAT no. 145148910
          </Text>

          <Text style={styles.text}>
            Accident Direct Claims Ltd Registration no 8171918. VAT no 449
            711080 Registered office address: 541a Coventry Road, Birmingham,
            B10 0LL
          </Text>

          <Text style={styles.subHeader}>NOTICE TO CANCEL</Text>
          <View style={styles.section}>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Notice of the Right to Cancel</Text>
              <Text style={styles.boldText}>Date:</Text> 13/08/2025
              {" ".repeat(10)}
              <Text style={styles.boldText}>Name:</Text> MR TEDRUS GEBREMESKEL
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Address:</Text> 46 ARMFIELD STREET,
              COVENTRY{" ".repeat(10)}
              <Text style={styles.boldText}>Postcode:</Text> CV6 7GE
            </Text>
            <Text style={styles.text}>
              Where you have entered this vehicle hire agreement for reasons
              wholly or mainly outside your trade, business, craft or
              profession, you have the right to cancel it without giving any
              reason within a period of 14 days starting the day after the date
              on which the agreement was entered. Your right to cancel will
              expire once this period ends.
            </Text>
            <Text style={styles.text}>
              To exercise the right to cancel, you must inform us of your
              decision to cancel this agreement by a clear statement (e.g. a
              letter sent by post and email). You may use the cancellation form
              below if you wish but you do not have to.
            </Text>
            <Text style={styles.text}>
              To meet the cancellation deadline, it is sufficient for you to
              send your communication concerning your exercise of the right to
              cancel before the cancellation period has expired. You can cancel
              by post to 541a Coventry Road, Birmingham, B10 0LL or by email to
              info@accidentdirectclaimsltd.co.uk
            </Text>
            <Text style={styles.text}>
              Where you requested us to begin the performance of services during
              the cancelation period, You shall pay us a amount which in
              proportion to what has been performed until you have communicated
              your cancellation to us, the proportion begin in comparison with
              the full coverage of the contract.
            </Text>
          </View>
          <Text style={styles.text}>
            Accident Direct Claims ltd Registration no 8171918. Registered
            office address: 541a Coventry Road, Birmingham, B10 0LL
          </Text>

          <Text style={styles.subHeader}>Cancellation Notice</Text>
          <View style={styles.section}>
            <Text style={styles.text}>
              If you wish to cancel the agreement you may use this form, if you
              want to, but you do not have to.
            </Text>
            <Text style={styles.text}>
              To: 541a Coventry Road, Birmingham, B10 0LL Email:
              info@accidentdirectclaimsltd.co.uk
            </Text>
            <Text style={styles.text}>
              I/We hereby give notice that I/We wish to cancel my/our vehicle
              hire agreement.
            </Text>
            <Text style={styles.text}>
              Name:{" ".repeat(50)}Address:{" ".repeat(50)}
            </Text>
            <BlankLine width="90%" />
            <Text style={styles.text}>
              {" ".repeat(80)}postcode:{" ".repeat(20)}
            </Text>
            <BlankLine width="90%" />
            <Text style={styles.text}>
              Signed:{" ".repeat(70)}Date:{" ".repeat(30)}
            </Text>
            <BlankLine width="90%" />
          </View>

          <Text style={styles.footer}>
            541a Coventry Road, Small Heath, Birmingham, B10 0LL Tel: 0121 771
            4003 Fax: 0121 771 0551
          </Text>
          <Text style={styles.footer}>
            www.accidentdirectclaimsltd.co.uk | info@accidentdirectclaimsltd.uk
          </Text>
          <Text style={styles.footer}>
            Regulated by the Financial Conduct Authority in respect of regulated
            claims management activities.
          </Text>
          <Text style={styles.footer}>Authorisation Number: 836403</Text>
        </Page>

        {/* Page 3 - Extended Terms and Conditions */}
        <Page size="A4" style={styles.page}>
          <Text style={styles.subHeader}>TERMS AND CONDITIONS</Text>
          <View style={styles.section}>
            <Text style={styles.text}>
              In this agreement the following terms shall have the meanings
              hereby respectively assigned to them.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Hirer:</Text> The person named
              overleaf
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Lessor:</Text> Accident Direct
              Claims Ltd
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Rental/Hire Period:</Text> The
              period from the date and time as stated overleaf until the return
              of the vehicle to the lessor (maximum 89 days).
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Hire/Rental charges:</Text> Charges
              for the hire period overleaf calculated in accordance with the
              lessor’s tariff, which can be inspected at the commencement of the
              hire and/or stipulated overleaf.
            </Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.text}>
              The Hirer shall be bound by the following terms and conditions,
              which incorporate the details shown overleaf.
            </Text>
            <Text style={styles.text}>
              Where the person signing this agreement on behalf of the renter is
              not the renter, he or she represents and warrants to owner that he
              or she is duly authorised to sign and to enter into this agreement
              for and behalf of the renter and obligations on the part of the
              renter hereunder shall be deemed to be made by such person jointly
              and severally with the renter.
            </Text>
            <Text style={styles.text}>
              In no event shall the Vehicle be used, operated or driven:
            </Text>
            <Text style={styles.text}>
              {" "}
              - By a person who is less than 25 years of age or more than 70
              years of age (unless such approval has been given and agreed in
              writing) or who has given to the lessor any false or fictitious
              particulars;
            </Text>
            <Text style={styles.text}>
              {" "}
              - Knowingly for any unlawful purpose;
            </Text>
            <Text style={styles.text}>
              {" "}
              - To propel or tow any vehicle or trailer;
            </Text>
            <Text style={styles.text}>
              {" "}
              - For racing, pacemaking, reliability trials, speed testing or
              driving tuition;
            </Text>
            <Text style={styles.text}> - By a person except the hirer;</Text>
            <Text style={styles.text}>
              {" "}
              - To a carry a greater number of passengers and or more baggage
              than is recommended by the manufacturer;
            </Text>
            <Text style={styles.text}>
              {" "}
              - Alter the expiry of the period of hire as stated overleaf;
            </Text>
            <Text style={styles.text}> - Outside the United Kingdom;</Text>
            <Text style={styles.text}>
              The Vehicle must not be driven in a manner which would render void
              any insurance and/or other contract of insurance, or in
              contravention of any road traffic act or contravention of use
              regulations, nor must it be driven in the event of mechanical,
              electrical, or structural failure which might cause further
              damage.
            </Text>
            <Text style={styles.text}>
              The Hirer will return the vehicle to the lessor’s address shown
              overleaf on the date shown overleaf or earlier as demanded by the
              lessor’s together with all tyres, tools, accessories and equipment
              in the same condition as when received (ordinary wear and tear is
              accepted).
            </Text>
            <Text style={styles.text}>
              The Hirer shall not use the vehicle if any damage or fault shall
              arise so as to make the vehicle unroadworthy or liable to cause
              danger to any person or property until such damage or fault has
              been repaired or corrected. In the event of any such fault arising
              which can be repaired at a total cost of less than £25, the hirer
              shall either return the vehicle to the lessor or authorise the
              carrying out of such repair by a reputable and properly qualified
              motor repairer. Authorisation for expenditure in excess of £25
              must be obtained from the lessor prior to commencement of the
              repair. The hirer shall not without the lessor’s consent permit or
              authorise repairs to the vehicle at a total cost exceeding £25 or
              suffer any lien to be placed upon the vehicle and shall pay for
              any and all charges in connection with any such unauthorised
              repairs. The Hirer shall inform the lessor as soon as reasonably
              possible of any fault to the vehicle requiring repair or of the
              carrying out of any repair to the vehicle as aforesaid. The Hirer
              is also responsible for the daily safety checks of the vehicle, in
              particular water, oil level and tyres, while the Hirer is in
              custody of the vehicle any damage resulting from the failure to
              adhere to the above will be charged back to the Hirer.
            </Text>
            <Text style={styles.text}>
              The Vehicle will at all times remain the property of the Lessor
              and at no time will title to the vehicle pass to the Hirer.
            </Text>
            <Text style={styles.text}>
              The Lessor shall provide third party insurance and accidental
              damage, fire and theft cover for the hire vehicle for benefit of
              the hirer holding a full British Driving Licence and driving with
              his prior consent and named overleaf. The Hirer agrees to comply
              with and be bound by all terms, conditions, limitations and
              restrictions of such a policy as If here set forth including any
              same not ‘specifically mentioned herein such a policy, a copy of
              which may be inspected at the office of the lessor shall (subject
              to the requirements of the Road Traffic Acts) not apply;
            </Text>
            <Text style={styles.text}>
              {" "}
              - To any obligation for which the hirer or any driver of the
              vehicle or the employer of either or any insurance carrier may be
              held liable under any workman’s compensation or disability
              benefit, or similar law;
            </Text>
            <Text style={styles.text}>
              {" "}
              - To any obligation assumed by the hirer or, any driver under any
              express or of implied contract apart from this rental agreement;
            </Text>
            <Text style={styles.text}>
              {" "}
              - To any liability of the hirer or any driver or any employee of
              either arising while the vehicle is being used in violation of any
              of the limitations set forth in Paragraph 1 above; or
            </Text>
            <Text style={styles.text}>
              {" "}
              - To medical payments required by persons sustaining injuries
              while riding or alighting from or getting into or on the vehicle.
            </Text>
            <Text style={styles.text}>
              The Hirer shall be liable as owner of the vehicle in respect of:
            </Text>
            <Text style={styles.text}>
              {" "}
              - Any offences which may be committed in relation to that vehicle
              when a fixed penalty notice is issued.
            </Text>
            <Text style={styles.text}>
              {" "}
              - Fines, to cover administration costs a surcharge will be made
              for penalty notices left unpaid in addition to the amount of this
              fine.
            </Text>
            <Text style={styles.text}>
              {" "}
              - Any financial penalty or charge which may be demanded by a third
              party as a result of the vehicle having been parked or left upon
              land which is not a public road, Under Section 66 of the Road
              Traffic Offenders Act 1988.
            </Text>
            <Text style={styles.text}>
              The Hirer shall immediately report to the lessor any accident in
              which the vehicle is involved in and shall deliver to the lessor
              or its insurer if so directed by the lessor every process pleading
              or notice or paper of any kind received by the hirer or the
              vehicle relating to any claim suit or proceedings connected with
              any such accident or event involving the vehicle neither the hirer
              nor any driver of the vehicle shall aid or abet the assertion of
              any such claim suit or proceeding and shall co-operate with the
              lessor and its insurer in investigating and defending the same.
            </Text>
            <Text style={styles.text}>
              The Hirer shall keep the vehicle free from any legal process or
              encumbrance whatsoever. The Hirer shall not allow the vehicle to
              be ceased in any distress or sequestration for rent or otherwise
              or any execution or diligence or by a receiver appointed under any
              mortgage charge or other encumbrances.
            </Text>
            <Text style={styles.text}>
              The Hirer shall defend indemnity and hold harmless the lessor from
              and against any and all losses, liabilities, damages, injuries,
              claims, demands, costs and expenses arising out of all connected
              with the possession or use of the vehicle during the rental term
              (except those covered by the insurance provided hereunder by the
              lessor) and caused by negligence or non-observance of the
              agreement on the part of the hirer or his drivers, agents or
              employees including but not limited to any and all claims of
              liabilities to the third parties arising out of the abandonment,
              conversion, secretion, concealment or unauthorised disposal of the
              vehicle by the hirer or his drivers agents or employees or the
              confiscation of the vehicle by any government authority for
              illegal or improper use of the said vehicle.
            </Text>
            <Text style={styles.text}>
              The Lessor shall not be liable for loss or damage to any property
              of the hirer or any other person who may have been in or on the
              vehicle either before or after its return to the lessor whether or
              not related to the negligence of the lessor or agents servants or
              employees. The hirer shall assume all risk of such loss or damage
              waive all claims therefore against the lessor and defend indemnity
              and hold the lessor harmless from all claims arising out of such
              damage.
            </Text>
            <Text style={styles.text}>
              Notwithstanding the period of hire shown overleaf:
            </Text>
            <Text style={styles.text}>
              {" "}
              - The lessor may demand the return of the vehicle at any time,
              save that such a demand is not to be made without reasonable
              cause;
            </Text>
            <Text style={styles.text}>
              {" "}
              - The lessor may repossess the vehicle 24 hours after the demand,
              if the vehicle has not been returned in that time, or sooner, if
              in the lessor’s (reasonable judgement the demand is not likely to
              be compiled with);
            </Text>
            <Text style={styles.text}>
              {" "}
              - The lessor shall not be liable for any loss whatsoever or damage
              which the hirer is subject to as a consequence of such demands and
              or repossession;
            </Text>
            <Text style={styles.text}>
              {" "}
              - If the vehicle is not returned by the due date shown overleaf
              and/or in accordance with Paragraph (a) above; of this clause the
              hirer will pay to the lessor hire charges at the lessor’s
              published tariffs (which can be inspected at the lessor’s
              premises) for such period as the vehicle shall be wrongfully
              retained by the hirer, his servants and/or agents, plus any
              administration charges incurred.
            </Text>
            <Text style={styles.text}>
              Upon termination of this agreement (howsoever arising) the hirer
              shall cease to be in possession of the vehicle with the lessor’s
              consent and shall return the vehicle in good and substantial
              repair and condition at the hirer’s expense.
            </Text>
            <Text style={styles.text}>
              The Hirer shall pay to the lessor; hire charges and other such
              charges that become due under this agreement by one single
              instalment within eleven calendar months beginning with the date
              of this agreement.
            </Text>
            <Text style={styles.text}>
              The Period of Credit referred to in 12 herein may be terminated by
              the lessor earlier upon giving notice, save that such a demand is
              not made without a reasonable cause.
            </Text>
            <Text style={styles.text}>
              Any addition to or alteration of the terms and conditions of this
              agreement shall be null and void unless agreed upon in writing by
              the lessor and hirer.
            </Text>
            <Text style={styles.text}>
              The Hirer agrees to compensate the lessor in full for any loss it
              suffers as a result of damage, fire or theft to or of the vehicle
              including loss of revenue for the period during which the vehicle
              shall remain unavailable for hire by reasons of the hirer’s wilful
              or negligent actions.
            </Text>
            <Text style={styles.text}>
              Maximum Hire Period of this agreement shall NOT exceed 89 days.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>Assignment.</Text> The lessor may
              assign or transfer the lessors rights and or obligations under
              this agreement. In the event of such assignment the hirer
              will/shall still be bound by the terms and conditions.
            </Text>
            <Text style={styles.text}>
              <Text style={styles.boldText}>The Hirer acknowledges that:</Text>
            </Text>
            <Text style={styles.text}>
              {" "}
              - The vehicle is fit for the purpose and is in good condition and
              undertakes to return it and its accessories in the same condition,
              fair wear and tear excepted, to the place and on the date due back
              specified overleaf;
            </Text>
            <Text style={styles.text}>
              {" "}
              - They have received the vehicle free from defects or damage
              (except as indicated overleaf) and, that the Lessor has no
              liability in respect of any injury, loss or damage arising from
              the use of the vehicle, nor shall the lessor be liable for any
              indirect or consequential loss or damage. The Lessor shall not be
              liable for damages arising from defects or mechanical failures
              which are not attributable to any breach of the manufacturer’s
              warranty or any warranty implied by law to take reasonable care or
              exercise reasonable skill.
            </Text>
            <Text style={styles.text}>
              Vehicle not to be taken outside England, Scotland and Wales.
            </Text>
          </View>

          <Text style={styles.text}>
            <Text style={styles.boldText}>
              *** I accept the conditions above and agree to be bound by their
              content. I acknowledge my liability to pay for the hire charges.
            </Text>
          </Text>
          <Text style={styles.text}>
            SIGNED BY HIRER: ..{"_".repeat(40)} DATE: ..{"_".repeat(20)}
          </Text>
        </Page>
      </Document>
    </PDFViewer>
  );
}
