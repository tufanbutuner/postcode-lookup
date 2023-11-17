"use client";

import Table from "@/components/Table";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [postcode, setPostcode] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [notFoundMessage, setNotFoundMessage] = useState("");
  const [validationError, setValidationError] = useState("");
  const [disableButton, setDisableButton] = useState(false);

  const isPostcodeValid = (postcode: string) => {
    const postcodeRegex = /^[A-Za-z][1-9] [1-9][A-Za-z]{2}$/;
    return postcodeRegex.test(postcode);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!isPostcodeValid(postcode)) {
      console.error("Invalid postcode format");
      setValidationError("Invalid postcode format");
      return;
    }

    setValidationError("");

    try {
      setLoading(true);
      setDisableButton(true);
      const response = await fetch("/api/postcode", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ postcode }),
      });

      const data = await response.json();
      setNotFoundMessage(data.error);
      setAddresses(data.data);
      setLoading(false);
    } catch (error: any) {
      console.error("Error:", error);
      throw new Error(error);
    } finally {
      setTimeout(() => {
        setDisableButton(false);
      }, 5000);
    }
  };

  console.log(disableButton);

  return (
    <>
      <main className="main-wrapper">
        <form
          className="govuk-form-group lbh-form-group"
          onSubmit={handleSubmit}
        >
          <h1>Address lookup</h1>

          {validationError && (
            <span className="govuk-error-message lbh-error-message">
              <span className="govuk-visually-hidden">Error:</span>
              {validationError}
            </span>
          )}

          <label
            className="govuk-label lbh-label"
            htmlFor="input-with-hint-text"
          >
            Postcode
          </label>
          <span id="input-with-hint-text-hint" className="govuk-hint lbh-hint">
            Enter a postcode. For example, ‘E8 1HH’.
          </span>
          <input
            onChange={(e: any) => setPostcode(e.target.value)}
            value={postcode}
            className="govuk-input lbh-input"
            id="input-with-hint-text"
            name="postcode"
            type="text"
            aria-describedby="input-with-hint-text-hint"
          />
          <button
            className="govuk-button lbh-button"
            data-module="govuk-button"
            type="submit"
            disabled={disableButton}
          >
            Submit
          </button>
        </form>

        {addresses && <Table data={addresses} />}
        {notFoundMessage && <h5 className="message">{notFoundMessage}</h5>}
      </main>
    </>
  );
}
