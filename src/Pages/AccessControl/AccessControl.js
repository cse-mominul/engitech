import React from "react";
import Access from "../../Assets/fingerprint-access-control.jpg";
import { BsDatabaseFillLock } from "react-icons/bs";
import { BsShieldLockFill } from "react-icons/bs";
import { BsPersonFillLock } from "react-icons/bs";
import { BsTable } from "react-icons/bs";
import { BsSignNoLeftTurnFill } from "react-icons/bs";
import { BsStopwatchFill } from "react-icons/bs";
import finger from "../../Assets/finger1.jpg";
const AccessControl = () => {
  return (
    <div className="bg-white">
      {" "}
      <div className="hero min-h-screen ">
        <div className="flex-col-reverse hero-content lg:flex-row-reverse">
          <div>
            <h1
              data-aos="fade-down"
              className="mb-5 text-[#1A0F91] text-left text-3xl font-bold"
            >
              THE IMPORTANCE OF ACCESS CONTROL
            </h1>
            <h3
              data-aos="fade-down"
              className="mb-5 text-gray-900 text-left text-xl font-bold"
            >
              Empowering Security, Preserving Trust: Access Control at Its
              Finest.
            </h3>

            <p data-aos="fade-down" className="mb-5 text-left">
              The importance of access control extends beyond the digital
              sphere. In physical security, access control systems regulate
              entry to buildings, rooms, or restricted areas. By limiting
              physical access to authorized personnel, organizations can protect
              assets, confidential documents, and intellectual property from
              unauthorized individuals, thereby preventing physical breaches and
              theft. In conclusion, access control is a critical pillar of any
              comprehensive security strategy, providing the necessary
              safeguards for protecting valuable assets, ensuring compliance,
              and maintaining trust in the face of ever-evolving threats. By
              implementing robust access control mechanisms, organizations can
              fortify their defenses and mitigate risks, fostering a secure and
              resilient environment for their operations and stakeholders.{" "}
              <br />
            </p>
          </div>
          <img
            data-aos="fade-down"
            src={Access}
            className="w-[100%] lg:w-[50%]  pr-6"
          />
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center py-4 text-[#1A0F91]">
          BENEFITS OF ACCESS CONTROL
        </h1>
        <div class="grid py-4 px-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div
            data-aos="flip-left"
            class=" border border-gray-400 h-32 flex flex-col items-center justify-center font-bold "
          >
            <BsDatabaseFillLock className="text-[#1A0F91] text-5xl"></BsDatabaseFillLock>
            <p className="text-gray-700 text-sm">Data Security</p>
          </div>
          <div
            data-aos="flip-left"
            class=" border border-gray-400 h-32 flex flex-col items-center justify-center font-bold "
          >
            <BsPersonFillLock className="text-[#1A0F91] text-5xl"></BsPersonFillLock>
            <p className="text-gray-700 text-sm">Protecting Privacy</p>
          </div>
          <div
            data-aos="flip-left"
            class=" border border-gray-400 h-32 flex flex-col items-center justify-center font-bold "
          >
            <BsShieldLockFill className="text-[#1A0F91] text-5xl"></BsShieldLockFill>
            <p className="text-gray-700 text-sm">Maintaining Trust</p>
          </div>
          <div
            data-aos="flip-left"
            class=" border border-gray-400 h-32 flex flex-col items-center justify-center font-bold"
          >
            <BsTable className="text-[#1A0F91] text-5xl"></BsTable>
            <p className="text-gray-700 text-sm">SYSTEM MANAGEMENT</p>
          </div>
          <div
            data-aos="flip-left"
            class=" border border-gray-400 h-32 flex flex-col items-center justify-center font-bold"
          >
            <BsSignNoLeftTurnFill className="text-[#1A0F91]  text-5xl"></BsSignNoLeftTurnFill>
            <p className="text-gray-700 text-center text-sm">
              CONTROLLED ACCESS TO SPECIFIC AREAS
            </p>
          </div>
          <div
            data-aos="flip-left"
            class=" border border-gray-400 h-32 flex flex-col items-center justify-center font-bold"
          >
            <BsStopwatchFill className="text-[#1A0F91]  text-5xl"></BsStopwatchFill>
            <p className="text-gray-700 text-center text-sm">
              VIDEO TIMESTAMPS
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white py-12">
        <div className="hero min-h-screen bg-[#000247]">
          <div className="flex-col hero-content lg:flex-row-reverse">
            <img
              src={finger}
              className="w-[100%]  animate-pulse  lg:w-[50%]  pr-6"
            />
            <div>
              <h1 className="mb-5 text-left text-3xl text-white font-bold">
                ACCESS CONTROL FEATURES
              </h1>
              <ol className="list-disc pl-4">
                <li data-aos="fade-up" className="pt-2">
                  TCP/IP system structure – customer accounts are secured via
                  RSA and AES encryptions
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Multiple access modes – card, fingerprint, password and
                  combinations
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Multiple alarm functions – alarms can be set to trigger when
                  certain events occur
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Multi-system linkage – video surveillance, fire alarm, POS,
                  HVAC
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Lock down – instantly lock any door, anytime from anywhere
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Mobile app – manage your system from anywhere and let your
                  employees open doors with their smartphones
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Real-time reporting – see access events as they happen
                </li>
                <li data-aos="fade-up" className="pt-2">
                  Time and attendance – no more need for additional time clock
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccessControl;
