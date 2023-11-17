import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <main className="main-wrapper">
        <h1>Hackney postcode lookup</h1>
        <Input
          label="Postcode"
          hint="Enter a postcode. For example, ‘E8 ABC’."
        />
        <button className="govuk-button lbh-button" data-module="govuk-button">
          Submit
        </button>
      </main>
    </>
  );
}
