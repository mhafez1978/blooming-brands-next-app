"use client";
import React, { useState, useRef, useEffect, FormEvent } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";

const MyModal: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState<string>("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [projectSummary, setProjectSummary] = useState<string>("");
  const [marketCompetitors, setMarketCompetitors] = useState<string>("");
  const [existingWebsite, setExistingWebsite] = useState<string>("");
  const [existingHost, setExistingHost] = useState<string>("");
  const [projectBudget, setProjectBudget] = useState<string>("");
  const [appointment, setAppointment] = useState(new Date());
  const [industries, setIndustries] = useState([
    "Accounting",
    "Airlines/Aviation",
    "Alternative Dispute Resolution",
    "Alternative Medicine",
    "Animation",
    "Apparel & Fashion",
    "Architecture & Planning",
    "Arts & Crafts",
    "Automotive",
    "Aviation & Aerospace",
    "Banking",
    "Biotechnology",
    "Broadcast Media",
    "Building Materials",
    "Business Supplies & Equipment",
    "Capital Markets",
    "Chemicals",
    "Civic & Social Organization",
    "Civil Engineering",
    "Commercial Real Estate",
    "Computer & Network Security",
    "Computer Games",
    "Computer Hardware",
    "Computer Networking",
    "Computer Software",
    "Construction",
    "Consumer Electronics",
    "Consumer Goods",
    "Consumer Services",
    "Cosmetics",
    "Dairy",
    "Defense & Space",
    "Design",
    "Education Management",
    "E-learning",
    "Electrical & Electronic Manufacturing",
    "Entertainment",
    "Environmental Services",
    "Events Services",
    "Executive Office",
    "Facilities Services",
    "Farming",
    "Financial Services",
    "Fine Art",
    "Fishery",
    "Food & Beverages",
    "Food Production",
    "Fundraising",
    "Furniture",
    "Gambling & Casinos",
    "Glass, Ceramics & Concrete",
    "Government Administration",
    "Government Relations",
    "Graphic Design",
    "Health, Wellness & Fitness",
    "Higher Education",
    "Hospital & Health Care",
    "Hospitality",
    "Human Resources",
    "Import & Export",
    "Individual & Family Services",
    "Industrial Automation",
    "Information Services",
    "Information Technology & Services",
    "Insurance",
    "International Affairs",
    "International Trade & Development",
    "Internet",
    "Investment Banking/Venture",
    "Investment Management",
    "Judiciary",
    "Law Enforcement",
    "Law Practice",
    "Legal Services",
    "Legislative Office",
    "Leisure & Travel",
    "Libraries",
    "Logistics & Supply Chain",
    "Luxury Goods & Jewelry",
    "Machinery",
    "Management Consulting",
    "Maritime",
    "Marketing & Advertising",
    "Market Research",
    "Mechanical or Industrial Engineering",
    "Media Production",
    "Medical Device",
    "Medical Practice",
    "Mental Health Care",
    "Military",
    "Mining & Metals",
    "Motion Pictures & Film",
    "Museums & Institutions",
    "Music",
    "Nanotechnology",
    "Newspapers",
    "Nonprofit Organization Management",
    "Oil & Energy",
    "Online Publishing",
    "Outsourcing/Offshoring",
    "Package/Freight Delivery",
    "Packaging & Containers",
    "Paper & Forest Products",
    "Performing Arts",
    "Pharmaceuticals",
    "Philanthropy",
    "Photography",
    "Plastics",
    "Political Organization",
    "Primary/Secondary",
    "Printing",
    "Professional Training",
    "Program Development",
    "Public Policy",
    "Public Relations",
    "Public Safety",
    "Publishing",
    "Railroad Manufacture",
    "Ranching",
    "Real Estate",
    "Recreational",
    "Facilities & Services",
    "Religious Institutions",
    "Renewables & Environment",
    "Research",
    "Restaurants",
    "Retail",
    "Security & Investigations",
    "Semiconductors",
    "Shipbuilding",
    "Sporting Goods",
    "Sports",
    "Staffing & Recruiting",
    "Supermarkets",
    "Telecommunications",
    "Textiles",
    "Think Tanks",
    "Tobacco",
    "Translation & Localization",
    "Transportation/Trucking/Railroad",
    "Utilities",
    "Venture Capital",
    "Veterinary",
    "Warehousing",
    "Wholesale",
    "Wine & Spirits",
    "Wireless",
    "Writing & Editing",
  ]);
  const [submissionStatus, setSubmissionStatus] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [currentStep, inputRef]);

  useEffect(() => {
    console.log(selectedIndustries);
  }, [selectedIndustries]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Check if the event's target is a textarea
    if (e.target instanceof HTMLTextAreaElement) {
      return; // Exit the function if it's a textarea
    }

    if (e.key === "Enter") {
      e.preventDefault();

      if (currentStep < 12) {
        if (validateData()) {
          setCurrentStep((prev) => prev + 1);
        }
      }
    }
  };

  const renderFormStep = () => {
    const dateTimeToLocalString = (date: Date) => {
      let local = new Date(date);
      local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
      return local.toJSON().slice(0, 16);
    };

    const handleIndustryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value, checked } = e.target;
      if (checked && !selectedIndustries.includes(value)) {
        setSelectedIndustries((prevIndustries) => [...prevIndustries, value]);
      } else if (!checked && selectedIndustries.includes(value)) {
        setSelectedIndustries((prevIndustries) =>
          prevIndustries.filter((industry) => industry !== value)
        );
      }
      // Note: Logging `selectedIndustries` immediately after `setSelectedIndustries` won't reflect the change
    };

    const predefinedValues = [2500, 5000, 10000];

    const step =
      (predefinedValues[predefinedValues.length - 1] - predefinedValues[0]) /
      (predefinedValues.length - 1);

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const currentValue = parseInt(e.target.value, 10);
      const closestValue = predefinedValues.reduce((prev, curr) => {
        return Math.abs(curr - currentValue) < Math.abs(prev - currentValue)
          ? curr
          : prev;
      });
      setProjectBudget(closestValue.toString());
    };

    const formData = [
      { question: "Name", answer: name || "-" },
      { question: "Business Name", answer: businessName || "-" },
      {
        question: "Selected Industries",
        answer: selectedIndustries.length
          ? selectedIndustries.join(", ")
          : "None Selected",
      },
      { question: "Email", answer: email || "-" },
      { question: "Phone", answer: phone || "-" },
      { question: "Project Summary", answer: projectSummary || "-" },
      { question: "Market Competitors", answer: marketCompetitors || "-" },
      { question: "Existing Website", answer: existingWebsite || "None" },
      { question: "Existing Host", answer: existingHost || "None" },
      { question: "Project Budget", answer: projectBudget || "-" },
      {
        question: "Appointment",
        answer: `${appointment.toLocaleDateString()} ${appointment.toLocaleTimeString()}`,
      },
    ];

    switch (currentStep) {
      case 1:
        return (
          <div className="flex flex-col gap-2">
            <h2>
              WHAT IS YOUR NAME ? <span className="text-red-500">*</span>
            </h2>
            <hr />
            <input
              ref={inputRef}
              title="name"
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              maxLength={50}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col gap-2">
            <h2>
              WHAT IS YOUR DBA OR LEGAL BUSINESS NAME ?{" "}
              <span className="text-red-500">*</span>
            </h2>
            <hr />
            <input
              ref={inputRef}
              title="businessName"
              type="text"
              placeholder="Company name ..."
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              maxLength={50}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col gap-2">
            <h2>
              Select Your Business Industry.{" "}
              <span className="text-xs">Multiple selections allowed</span>{" "}
              <span className="text-red-500">*</span>
            </h2>
            <hr />
            <div className="w-full h-[50vh] flex flex-col flex-grow overflow-x-scroll ">
              {industries.map((industry, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    value={industry}
                    checked={selectedIndustries.includes(industry)}
                    onChange={(e) => handleIndustryChange(e)}
                  />
                  <span className="px-4">{industry}</span>
                </label>
              ))}
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 4:
        return (
          <div className="flex flex-col gap-2">
            <h2>
              WHAT&apos;S YOUR EMAIL ADDRESS ?{" "}
              <span className="text-red-500">*</span>
            </h2>
            <hr />
            <input
              ref={inputRef}
              title="email "
              type="email"
              placeholder="ie: jsmith@some-provider.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              maxLength={50}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 5:
        return (
          <div className="flex flex-col gap-2">
            <h2>
              WHAT&apos;S YOUR PHONE NUMBER?{" "}
              <span className="text-red-500">*</span>
            </h2>
            <hr />
            <input
              ref={inputRef}
              title="phone"
              type="text"
              placeholder="ie: 123-456-7890"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              maxLength={20}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 6:
        return (
          <div className="flex flex-col gap-2">
            <h2>
              PROJECT OBJECTIVE/SUMMARY: <span className="text-red-500">*</span>
            </h2>
            <hr />
            <textarea
              ref={textareaRef} // <-- using textareaRef directly
              placeholder="Please provide a brief summary of your project."
              value={projectSummary}
              onChange={(e) => setProjectSummary(e.target.value)}
              required
              maxLength={500}
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 7:
        return (
          <div className="flex flex-col gap-2">
            <h2>WHO ARE YOUR LOCAL OR GLOBAL COMPETITORS ? </h2>
            <hr />
            <textarea
              ref={textareaRef} // <-- using textareaRef directly
              placeholder="Please list any known local or global competitors known to you."
              value={marketCompetitors}
              onChange={(e) => setMarketCompetitors(e.target.value)}
            ></textarea>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 8:
        return (
          <div className="flex flex-col gap-2">
            <h2>ENTER YOUR CURRENT WEBSITE DOMAIN NAME IF YOU HAVE ONE. </h2>
            <hr />
            <input
              ref={inputRef}
              title="existingWebsite"
              type="url"
              placeholder="www.example.co.uk or example.com"
              value={existingWebsite}
              onChange={(e) => setExistingWebsite(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 9:
        return (
          <div className="flex flex-col gap-2">
            <h2>WHO&apos;S YOUR CURRENT HOSTING PROVIDER ? </h2>
            <hr />
            <input
              ref={inputRef}
              title="existingHost"
              type="text"
              placeholder="Godaddy, Bluehost, 1and1, ... etc."
              value={existingHost}
              onChange={(e) => setExistingHost(e.target.value)}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 10:
        return (
          <div className="flex flex-col gap-2">
            <h2>WHAT&apos;S YOUR PROJECT BUDGET ? </h2>
            <input
              ref={inputRef}
              title="projectBudget"
              type="range"
              min={predefinedValues[0]}
              max={predefinedValues[predefinedValues.length - 1]}
              step={step}
              value={projectBudget}
              onChange={handleSliderChange}
            />
            <div className="flex justify-between w-full">
              {predefinedValues.map((value) => (
                <span key={value}>${value}.00</span>
              ))}
            </div>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 11:
        return (
          <div className="flex flex-col gap-2">
            <label htmlFor="appointment">SCHEDULE AN APPOINTMENT</label>
            <input
              ref={inputRef} // <-- using inputRef directly
              title="appointment"
              value={dateTimeToLocalString(appointment)}
              type="datetime-local"
              name="appointment"
              onChange={(e) => {
                setAppointment(new Date(e.target.value));
              }}
            />
            {error && <p className="text-red-500">{error}</p>}
          </div>
        );
      case 12:
        return (
          <div className="flex flex-col gap-2">
            <h2>Review Your Details</h2>
            <div>
              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="w-1/2 px-4 py-2 text-left text-gray-700 bg-gray-200 uppercase font-semibold">
                      Questions
                    </th>
                    <th className="w-1/2 px-4 py-2 text-left text-gray-700 bg-gray-200 uppercase font-semibold">
                      Answers
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {formData.map((data, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="w-1/2 px-4 py-2 border">
                        {data.question}
                      </td>
                      <td className="w-1/2 px-4 py-2 border">{data.answer}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const validateData = () => {
    setError(""); // Clear previous errors first
    switch (currentStep) {
      case 1:
        if (name.trim() === "") {
          setError("Please provide your name.");
          return false;
        }
        break;
      case 2:
        if (businessName.trim() === "") {
          setError("Please provide your business name.");
          return false;
        }
        break;
      case 3:
        if (selectedIndustries.length === 0) {
          setError("Please select at least one industry.");
          return false;
        }
        break;
      case 4:
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email)) {
          setError("Please provide a valid email address.");
          return false;
        }
        break;
      case 5:
        const phoneRegex =
          /^(?:\+?\d{1,4}[\s-]?)?(\d{2,3}[\s-]?\d{2,3}[\s-]?\d{4,5})$/;
        if (!phoneRegex.test(phone)) {
          setError("Please provide a valid phone number.");
          return false;
        }
        break;
      case 6:
        if (projectSummary.trim() === "" || projectSummary.length < 20) {
          setError(
            "Please provide some details about your project and requirements to proceed."
          );
          return false;
        }
        break;
      case 7:
        if (marketCompetitors.length === 0) {
          setError("If you know your competitors please list some here.");
          setMarketCompetitors("-");
          return true;
        } else {
          return true;
        }
        break;
      case 8:
        const websiteRegex =
          /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+)$/;
        if (existingWebsite.length > 5) {
          if (!websiteRegex.test(existingWebsite)) {
            setError("Please provide a valid website URL.");
            return false;
          } else {
            return true;
          }
        } else {
          setError(
            "It's ok if you don't have a website or a domain name one yet."
          );
          setExistingWebsite("na-domain.local");
          return true;
        }
        break;
      case 9:
        if (existingHost.length === 0) {
          setError("Please provide your hosting provider if you know it.");
          setExistingHost("-");
          return true;
        } else {
          return true;
        }
        break;
      default:
        return true;
    }
    return true; // Return true if validation passes for the current step
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior

    // Construct the submission data object from the existing state
    const submissionData = {
      name,
      businessName,
      selectedIndustries,
      email,
      phone,
      projectSummary,
      marketCompetitors,
      existingWebsite,
      existingHost,
      projectBudget,
      appointment,
    };

    // Perform the submission logic, e.g., sending data to an API
    try {
      const response = await fetch("http://localhost:3000/api/prospects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("Submission successful", data);
      setSubmissionStatus(true);
      setName("");
      setBusinessName("");
      setSelectedIndustries([]);
      setEmail("");
      setPhone("");
      setProjectSummary("");
      setMarketCompetitors("");
      setExistingWebsite("");
      setExistingHost("");
      setProjectBudget("");
      setAppointment(new Date());
      setCurrentStep(1);
    } catch (error) {
      console.error("Submission failed", error);
      setSubmissionStatus(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          onOpen();
          setCurrentStep(1); // Reset step when opening modal
        }}
        className="w-[200px] rounded-md text-slate-50 bg-violet-500 hover:bg-pink-600 hover:text-white dark:bg-white px-3.5 py-2.5 text-sm font-semibold dark:text-gray-900 dark:shadow-sm dark:hover:bg-purple-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white"
      >
        Let&apos;s Talk
      </button>
      <Modal
        className="min-h-[60vh]"
        size={"4xl"}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                We&apos;re Excited To Talk To You! (Step {currentStep} of 12)
              </ModalHeader>
              <hr />
              <ModalBody>
                {submissionStatus && (
                  <div
                    className={`${submissionStatus} === true ? "d-block" : "hidden"`}
                  >
                    <p className="text-lime-600 text-lg font-semibold">
                      Great job, ... We will contact you soon.
                    </p>
                    <p className="text-red-500">
                      You may close this windows now.
                    </p>
                  </div>
                )}
                <form
                  className="flex flex-col gap-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    validateData();
                  }}
                  onKeyDown={(e) => handleKeyDown(e)}
                >
                  {renderFormStep()}
                </form>
              </ModalBody>
              <ModalFooter>
                {currentStep > 1 && (
                  <button
                    className="px-8 py-4 border-1 bg-amber-400 text-black rounded-lg"
                    onClick={() => setCurrentStep((prev) => prev - 1)}
                  >
                    Previous
                  </button>
                )}
                {currentStep < 12 ? (
                  <button
                    className="px-8 py-4 border-1 bg-sky-400 text-white rounded-lg"
                    onClick={() => {
                      if (validateData()) {
                        setCurrentStep((prev) => prev + 1);
                      }
                    }}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    className="px-8 py-4 border-1 bg-lime-400 text-purple-800 rounded-lg"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                )}
                <button
                  className="px-8 py-4 border-1 bg-red-500 text-slate-100 rounded-lg"
                  onClick={onClose}
                >
                  Close
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default MyModal;
