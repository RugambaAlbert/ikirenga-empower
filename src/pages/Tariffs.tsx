import { useTranslation } from "@/contexts/TranslationContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Banknote, CreditCard, Smartphone, FileText, Percent } from "lucide-react";

const Tariffs = () => {
  const { t } = useTranslation();

  const accountServices = [
    { service: t("tariffs.accountOpening"), physical: t("tariffs.free"), business: t("tariffs.free"), ngo: t("tariffs.free") },
    { service: t("tariffs.savingsMinBalance"), physical: "0", business: "0", ngo: "0" },
    { service: t("tariffs.currentMinBalance"), physical: "1,000 RWF", business: "1,000 RWF", ngo: "1,000 RWF" },
    { service: t("tariffs.dormantActivation"), physical: "0", business: "0", ngo: "0" },
    { service: t("tariffs.accountClosing"), physical: t("tariffs.free"), business: t("tariffs.free"), ngo: t("tariffs.free") },
  ];

  const salaryTransfers = [
    { service: t("tariffs.salaryCommission"), interval1: "0", interval2: "200 RWF", interval3: "350 RWF", interval4: "500 RWF" },
    { service: t("tariffs.internalTransfers"), interval1: t("tariffs.free"), interval2: t("tariffs.free"), interval3: t("tariffs.free"), interval4: t("tariffs.free") },
    { service: t("tariffs.externalTransfer"), interval1: t("tariffs.free"), interval2: t("tariffs.free"), interval3: t("tariffs.free"), interval4: "2,000 RWF" },
    { service: t("tariffs.bankTransfer"), interval1: t("tariffs.free"), interval2: "750 RWF", interval3: "750 RWF", interval4: "750 RWF" },
  ];

  const withdrawals = [
    { service: t("tariffs.withdrawCurrent"), fee: t("tariffs.free") },
    { service: t("tariffs.withdrawZigama"), fee: t("tariffs.free") },
    { service: t("tariffs.withdrawChildren"), fee: t("tariffs.free") },
  ];

  const deposits = [
    { service: t("tariffs.depositMoney"), fee: t("tariffs.free") },
  ];

  const statements = [
    { service: t("tariffs.firstStatement"), fee: t("tariffs.free") },
    { service: t("tariffs.additionalStatement"), fee: "1,000 RWF" },
  ];

  const otherServices = [
    { service: t("tariffs.newPassbook"), fee: "1,500 RWF" },
    { service: t("tariffs.lostPassbook"), fee: "3,000 RWF" },
    { service: t("tariffs.accountConfirmation"), physical: "5,000 RWF", business: "10,000 RWF" },
    { service: t("tariffs.bankClearance"), fee: "5,000 RWF" },
    { service: t("tariffs.debtConfirmation"), fee: "1,000 RWF" },
    { service: t("tariffs.copyBankSlip"), fee: "1,000 RWF" },
    { service: t("tariffs.membershipFile"), fee: "500 RWF" },
  ];

  const searchFees = [
    { period: t("tariffs.search0to3"), fee: "5,000 RWF" },
    { period: t("tariffs.search3to12"), fee: "10,000 RWF" },
    { period: t("tariffs.search12plus"), fee: "15,000 RWF" },
  ];

  const mobileBanking = [
    { service: t("tariffs.acToWallet"), physical: t("tariffs.free"), business: t("tariffs.notApplicable") },
    { service: t("tariffs.walletToAc"), physical: t("tariffs.free"), business: t("tariffs.notApplicable") },
    { service: t("tariffs.miniStatement"), physical: t("tariffs.free"), business: t("tariffs.notApplicable") },
    { service: t("tariffs.checkBalance"), physical: t("tariffs.free"), business: t("tariffs.notApplicable") },
    { service: t("tariffs.pinChange"), physical: "500 RWF", business: t("tariffs.notApplicable") },
    { service: t("tariffs.transactionAlert"), physical: t("tariffs.free"), business: t("tariffs.free") },
    { service: t("tariffs.loanBalance"), physical: t("tariffs.free"), business: t("tariffs.notApplicable") },
  ];

  const loanProducts = [
    { name: "I. HINGA AHAGUTSE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "II. TURAHEZA", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "III. CURUZANAWE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "IV. TUNGA IYAWE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "V. WIGENAWE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "VI. SALARY ADVANCE", rate: "18% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: t("tariffs.notApplicable") },
    { name: "VII. QUINZAINE", rate: "10% Monthly", appFee: "0", studyFee: "0", commission: "0", collateral: t("tariffs.notApplicable") },
    { name: "VIII. NDATEKANYE", rate: "15% Annual", appFee: "500 RWF", studyFee: "1%", commission: "0", collateral: "3,000 - 12,000 RWF" },
    { name: "IX. ORORA NAWE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "X. IMARI ISHYUSHYE", rate: "5% Monthly", appFee: "1,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "XI. GIRUBUZIMA", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "XII. TUZAMURANE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "XIII. TINYUKA WIGIRE MUNYARWANDAKAZI", rate: "18% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "XIV. TEKA UTEKANYE", rate: "20% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "1%", collateral: "3,000 - 12,000 RWF" },
    { name: "XV. TERIMBERE MUHINZI W'ICYAYI", rate: "18% Annual", appFee: "2,000 RWF", studyFee: "1%", commission: "0", collateral: t("tariffs.notApplicable") },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            {t("tariffs.title")}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
            {t("tariffs.subtitle")}
          </p>
          <Badge variant="secondary" className="mt-4">
            {t("tariffs.effectiveDate")}
          </Badge>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Account Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="h-6 w-6 text-primary" />
              {t("tariffs.accountServices")}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.service")}</TableHead>
                  <TableHead>{t("tariffs.physicalMember")}</TableHead>
                  <TableHead>{t("tariffs.registeredBusiness")}</TableHead>
                  <TableHead>{t("tariffs.registeredNGO")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {accountServices.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.physical}</TableCell>
                    <TableCell>{item.business}</TableCell>
                    <TableCell>{item.ngo}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Salary & Transfers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Banknote className="h-6 w-6 text-primary" />
              {t("tariffs.salaryTransfers")}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.service")}</TableHead>
                  <TableHead>1 - 999 RWF</TableHead>
                  <TableHead>1,000 - 4,999 RWF</TableHead>
                  <TableHead>5,000 - 9,999 RWF</TableHead>
                  <TableHead>10,000+ RWF</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salaryTransfers.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.interval1}</TableCell>
                    <TableCell>{item.interval2}</TableCell>
                    <TableCell>{item.interval3}</TableCell>
                    <TableCell>{item.interval4}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Withdrawals & Deposits */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Banknote className="h-6 w-6 text-primary" />
                {t("tariffs.cashWithdrawal")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("tariffs.service")}</TableHead>
                    <TableHead>{t("tariffs.fee")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {withdrawals.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{item.fee}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Banknote className="h-6 w-6 text-primary" />
                {t("tariffs.cashDeposit")}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>{t("tariffs.service")}</TableHead>
                    <TableHead>{t("tariffs.fee")}</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {deposits.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell className="font-medium">{item.service}</TableCell>
                      <TableCell>
                        <Badge variant="secondary">{item.fee}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Statements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {t("tariffs.statements")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.service")}</TableHead>
                  <TableHead>{t("tariffs.fee")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {statements.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.fee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Other Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {t("tariffs.otherServices")}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.service")}</TableHead>
                  <TableHead>{t("tariffs.fee")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {otherServices.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.fee || `${item.physical} / ${item.business}`}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Search Fees */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-6 w-6 text-primary" />
              {t("tariffs.searchFees")}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.period")}</TableHead>
                  <TableHead>{t("tariffs.feePerDocument")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {searchFees.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.period}</TableCell>
                    <TableCell>{item.fee}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Mobile Banking */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-6 w-6 text-primary" />
              {t("tariffs.mobileBanking")}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.service")}</TableHead>
                  <TableHead>{t("tariffs.physicalMember")}</TableHead>
                  <TableHead>{t("tariffs.businessNGO")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mobileBanking.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell>{item.physical}</TableCell>
                    <TableCell>{item.business}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Loan Products */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Percent className="h-6 w-6 text-primary" />
              {t("tariffs.loanProducts")}
            </CardTitle>
          </CardHeader>
          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>{t("tariffs.loanName")}</TableHead>
                  <TableHead>{t("tariffs.interestRate")}</TableHead>
                  <TableHead>{t("tariffs.applicationFee")}</TableHead>
                  <TableHead>{t("tariffs.studyFee")}</TableHead>
                  <TableHead>{t("tariffs.commission")}</TableHead>
                  <TableHead>{t("tariffs.collateralVisit")}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {loanProducts.map((item, idx) => (
                  <TableRow key={idx}>
                    <TableCell className="font-medium">{item.name}</TableCell>
                    <TableCell>
                      <Badge variant="outline">{item.rate}</Badge>
                    </TableCell>
                    <TableCell>{item.appFee}</TableCell>
                    <TableCell>{item.studyFee}</TableCell>
                    <TableCell>{item.commission}</TableCell>
                    <TableCell>{item.collateral}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Notes */}
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle>{t("tariffs.importantNotes")}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t("tariffs.note1")}</li>
              <li>{t("tariffs.note2")}</li>
              <li>{t("tariffs.note3")}</li>
              <li>{t("tariffs.note4")}</li>
              <li>{t("tariffs.note5")}</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Tariffs;
