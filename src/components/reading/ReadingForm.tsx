"use client";

import { useState } from "react";

export type ReadingFormData = {
  age: string;
  birthDate: string;
  gender: string;
  readingType: string;
  additionalInfo: string;
};

type ReadingFormProps = {
  onSubmit: (formData: ReadingFormData) => void;
  isLoading: boolean;
};

const ReadingForm = ({ onSubmit, isLoading }: ReadingFormProps) => {
  const [formData, setFormData] = useState<ReadingFormData>({
    age: "",
    birthDate: "",
    gender: "Female",
    readingType: "love",
    additionalInfo: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReadingFormData, string>>>({});

  const handleInputChange = (field: keyof ReadingFormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // Clear error when field is updated
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ReadingFormData, string>> = {};

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
    } else if (isNaN(Number(formData.age)) || Number(formData.age) <= 0 || Number(formData.age) > 120) {
      newErrors.age = "Please enter a valid age (1-120)";
    }

    if (formData.birthDate) {
      // Validate format YYYY-MM-DD
      if (!/^\d{4}-\d{2}-\d{2}$/.test(formData.birthDate)) {
        newErrors.birthDate = "Please select a valid date";
      } else {
        // Further validate the date is valid
        const [year, month, day] = formData.birthDate.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        
        // Check if the date is valid
        if (
          date.getFullYear() !== year || 
          date.getMonth() !== month - 1 || 
          date.getDate() !== day ||
          year < 1900 || 
          year > new Date().getFullYear()
        ) {
          newErrors.birthDate = "Please enter a valid date";
        }
      }
    }

    if (!formData.gender) {
      newErrors.gender = "Please select a gender";
    }

    if (!formData.readingType) {
      newErrors.readingType = "Please select a reading focus";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-8">
        <h3 className="text-xl text-white font-semibold mb-2">Personal Information</h3>
        <div className="h-1 w-16 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="age" className="block text-white/90 text-sm font-medium">
            Age <span className="text-yellow-300">*</span>
          </label>
          <input
            id="age"
            type="number"
            value={formData.age}
            onChange={(e) => handleInputChange("age", e.target.value)}
            placeholder="Your age"
            className={`w-full px-4 py-3 bg-gray-900/50 border ${
              errors.age ? "border-red-500" : "border-white/10 focus:border-yellow-300"
            } rounded-lg text-white placeholder-white/40 outline-none transition-all focus:ring-2 focus:ring-yellow-300/30`}
            min="1"
            max="120"
            required
          />
          {errors.age && <p className="text-red-400 text-xs mt-1">{errors.age}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="birthDate" className="block text-white/90 text-sm font-medium">
            Select Date <span className="text-white/50">(Optional)</span>
          </label>
          <div className="relative">
            <input
              id="birthDate"
              type="date"
              placeholder="Select Date"
              value={formData.birthDate}
              onChange={(e) => handleInputChange("birthDate", e.target.value)}
              className={`w-full px-4 py-3 bg-gray-900/50 border ${
                errors.birthDate ? "border-red-500" : "border-white/10 focus:border-yellow-300"
              } rounded-lg text-white placeholder-white/40 outline-none transition-all focus:ring-2 focus:ring-yellow-300/30`}
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg className="w-5 h-5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          {errors.birthDate && <p className="text-red-400 text-xs mt-1">{errors.birthDate}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-white/90 text-sm font-medium">
          Gender <span className="text-yellow-300">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          {["Female", "Male", "Non-binary"].map((option) => (
            <label
              key={option}
              className={`flex items-center justify-center px-4 py-2 border ${
                formData.gender === option
                  ? "border-yellow-300 bg-yellow-300/10"
                  : "border-white/10 hover:bg-white/5"
              } rounded-lg cursor-pointer transition-all group`}
            >
              <input
                type="radio"
                name="gender"
                value={option}
                checked={formData.gender === option}
                onChange={(e) => handleInputChange("gender", e.target.value)}
                className="sr-only"
              />
              <span className={`text-sm ${formData.gender === option ? "text-yellow-300" : "text-white/70 group-hover:text-white"}`}>
                {option}
              </span>
            </label>
          ))}
        </div>
        {errors.gender && <p className="text-red-400 text-xs mt-1">{errors.gender}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-white/90 text-sm font-medium">
          Reading Focus <span className="text-yellow-300">*</span>
        </label>
        <select
          value={formData.readingType}
          onChange={(e) => handleInputChange("readingType", e.target.value)}
          className={`w-full px-4 py-3 bg-gray-900/50 border ${
            errors.readingType ? "border-red-500" : "border-white/10 focus:border-yellow-300"
          } rounded-lg text-white outline-none appearance-none transition-all focus:ring-2 focus:ring-yellow-300/30`}
        >
          <option value="love">Love & Relationships</option>
          <option value="career">Career & Purpose</option>
          <option value="wealth">Wealth & Abundance</option>
          <option value="personal">Personal Growth</option>
          <option value="relationships">Interpersonal Relationships</option>
          <option value="spiritual">Spiritual Connection</option>
        </select>
        {errors.readingType && <p className="text-red-400 text-xs mt-1">{errors.readingType}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="additionalInfo" className="block text-white/90 text-sm font-medium">
          Additional Context <span className="text-white/50">(Optional)</span>
        </label>
        <textarea
          id="additionalInfo"
          value={formData.additionalInfo}
          onChange={(e) => handleInputChange("additionalInfo", e.target.value)}
          placeholder="What's currently happening in your life? Are you experiencing any challenges or opportunities?"
          rows={4}
          className="w-full px-4 py-3 bg-gray-900/50 border border-white/10 rounded-lg text-white placeholder-white/40 outline-none transition-all focus:border-yellow-300 focus:ring-2 focus:ring-yellow-300/30"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 px-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none"
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Generating Your Reading...
          </div>
        ) : (
          "Receive Your Divine Guidance"
        )}
      </button>

      <div className="text-center text-white/50 text-xs pt-4">
        By submitting this form, you acknowledge that your reading is generated based on your inputs 
        and is for spiritual guidance purposes only.
      </div>
    </form>
  );
};

export default ReadingForm; 