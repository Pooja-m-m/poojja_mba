"use client";
import { useState } from "react";
import { Switch } from "@headlessui/react";

const GeneralSettings = () => {
  const [allowNewAccounts, setAllowNewAccounts] = useState(false);
  const [allowResetPassword, setAllowResetPassword] = useState(false);
  
  const [gracePeriod, setGracePeriod] = useState(30);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        {/* Heading */}
        <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
          General Settings
        </h2>

        {/* Account Restrictions Section */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Account Restrictions:
            </h3>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm">
              <div>
                <p className="font-medium text-gray-800">
                  Allow creating new accounts
                </p>
                <p className="text-gray-600 text-sm">
                  By default, any user visiting your domain can sign up for a new account.
                </p>
              </div>
              <Switch
                checked={allowNewAccounts}
                onChange={setAllowNewAccounts}
                className={`${allowNewAccounts ? "bg-teal-600" : "bg-gray-300"}
                  relative inline-flex h-6 w-11 items-center rounded-full transition duration-300`}
              >
                <span
                  className={`${allowNewAccounts ? "translate-x-6" : "translate-x-1"}
                    inline-block h-4 w-4 transform bg-white rounded-full transition duration-300`}
                />
              </Switch>
            </div>

            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg shadow-sm mt-4">
              <div>
                <p className="font-medium text-gray-800">
                  Allow resetting password
                </p>
                <p className="text-gray-600 text-sm">
                  By default, users can reset their passwords.
                </p>
              </div>
              <Switch
                checked={allowResetPassword}
                onChange={setAllowResetPassword}
                className={`${allowResetPassword ? "bg-teal-600" : "bg-gray-300"}
                  relative inline-flex h-6 w-11 items-center rounded-full transition duration-300`}
              >
                <span
                  className={`${allowResetPassword ? "translate-x-6" : "translate-x-1"}
                    inline-block h-4 w-4 transform bg-white rounded-full transition duration-300`}
                />
              </Switch>
            </div>
          </div>

          <hr className="border-gray-300" />

          {/* User Deletion Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              User Deletion:
            </h3>

            <div className="p-4 bg-gray-50 rounded-lg shadow-sm">
              <p className="font-medium text-gray-800">
                User deletion grace delay
              </p>
              <p className="text-gray-600 text-sm">
                The default grace delay period is 30 days. Instance Admins can adjust this period in the User deletion section.
              
              <input
                type="number"
                value={gracePeriod}
                onChange={(e) => setGracePeriod(e.target.value)}
                className="mt-2 p-3 w-20 text-center bg-gray-200 rounded-lg outline-none text-gray-800 font-semibold border border-gray-300"
                min="1"
              />
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
