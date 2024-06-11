import React, { useState } from 'react';

const Profile = () => {
  const [bio, setBio] = useState('');
  const [charCount, setCharCount] = useState(0);

  const handleBioChange = (e) => {
    if (e.target.value.length <= 200) {
      setBio(e.target.value);
      setCharCount(e.target.value.length);
    }
  };

  return (
    <div className="min-h-screen p-6 bg-soft-beige flex items-center justify-center w-full">
      <div className="container max-w-screen-lg mx-auto w-full">
        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600">
              <p className="font-medium text-lg">Profile Information</p>
              <p>Please fill out all the fields.</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-5">
                  <label htmlFor="looking_for">Looking for</label>
                  <select
                    name="looking_for"
                    id="looking_for"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="all">All</option>
                  </select>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="relation_status">Relationship Status</label>
                  <select
                    name="relation_status"
                    id="relation_status"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="single">Single</option>
                    <option value="separated">Separated</option>
                    <option value="widowed">Widowed</option>
                  </select>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="profile_pics">Upload Profile Pictures</label>
                  <input
                    type="file"
                    name="profile_pic1"
                    id="profile_pic1"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    accept="image/*"
                  />
                  <input
                    type="file"
                    name="profile_pic2"
                    id="profile_pic2"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    accept="image/*"
                  />
                  <input
                    type="file"
                    name="profile_pic3"
                    id="profile_pic3"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    accept="image/*"
                  />
                  <input
                    type="file"
                    name="profile_pic4"
                    id="profile_pic4"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    accept="image/*"
                  />
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="religion">Religion</label>
                  <select
                    name="religion"
                    id="religion"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="hindu">Hindu</option>
                    <option value="christian">Christian</option>
                    <option value="islamic">Islamic</option>
                    <option value="jew">Jew</option>
                    <option value="not-to-mention">Not to Mention</option>
                  </select>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="caste">Caste</label>
                  <select
                    name="caste"
                    id="caste"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  >
                    <option value="not-to-mention">Not to Mention</option>
                    <option value="obc">OBC</option>
                    <option value="sc">SC</option>
                  </select>
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="job">Job</label>
                  <input
                    type="text"
                    name="job"
                    id="job"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="education">Education</label>
                  <input
                    type="text"
                    name="education"
                    id="education"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                  />
                </div>

                <div className="md:col-span-5">
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    name="bio"
                    id="bio"
                    className="h-24 border mt-1 rounded px-4 w-full bg-gray-50"
                    placeholder="Write something about yourself..."
                    value={bio}
                    onChange={handleBioChange}
                  ></textarea>
                  <p className="text-sm text-gray-500 text-right">{charCount}/200</p>
                </div>

                <div className="md:col-span-5 text-right">
                  <div className="inline-flex items-end">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
