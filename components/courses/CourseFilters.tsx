"use client";

import React, { useState } from "react";
import { Search, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CourseFiltersProps {
  onSearch: (query: string) => void;
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  categories: string[];
  duration: string[];
  level: string[];
  priceRange: [number, number] | null;
}

const categories = [
  "All Categories",
  "Data Science",
  "Web Development",
  "AI",
  "Marketing",
  "Cloud Computing",
  "Design",
  "Mobile Development",
  "Blockchain",
  "Cybersecurity",
  "Business Analytics",
  "Finance",
  "Product Management"
];

const durations = ["All Durations", "1-3 Months", "4-6 Months", "6+ Months"];
const levels = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const CourseFilters: React.FC<CourseFiltersProps> = ({ onSearch, onFilterChange }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    categories: [],
    duration: [],
    level: [],
    priceRange: null,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  const handleFilterChange = (
    filterType: keyof FilterState,
    value: string | [number, number]
  ) => {
    const newFilters = { ...filters };
    
    if (filterType === "priceRange") {
      newFilters.priceRange = value as [number, number];
    } else {
      const currentValues = newFilters[filterType] as string[];
      
      if (currentValues.includes(value as string)) {
        newFilters[filterType] = currentValues.filter((v) => v !== value);
      } else {
        newFilters[filterType] = [...currentValues, value as string];
      }
    }
    
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    const resetFilters = {
      categories: [],
      duration: [],
      level: [],
      priceRange: null,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="mb-8">
      <div className="mb-4 flex flex-col gap-4 sm:flex-row">
        <form onSubmit={handleSearch} className="relative flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for courses..."
              className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-4 focus:border-[#0099FF] focus:outline-none focus:ring-1 focus:ring-[#0099FF]"
            />
          </div>
        </form>
        <Button
          variant="outline"
          className="flex items-center gap-2"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
        >
          <Filter size={18} />
          <span>Filters</span>
          <ChevronDown size={18} className={`transition-transform ${isFiltersOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      {isFiltersOpen && (
        <div className="mb-6 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
          <div className="grid gap-6 md:grid-cols-4">
            {/* Categories */}
            <div>
              <h3 className="mb-2 font-semibold text-[#05264E]">Categories</h3>
              <div className="max-h-40 overflow-y-auto">
                {categories.map((category) => (
                  <label key={category} className="mb-1 flex items-center">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => handleFilterChange("categories", category)}
                      className="mr-2 h-4 w-4 rounded border-gray-300 text-[#0099FF] focus:ring-[#0099FF]"
                    />
                    <span className="text-sm">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <h3 className="mb-2 font-semibold text-[#05264E]">Duration</h3>
              {durations.map((duration) => (
                <label key={duration} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.duration.includes(duration)}
                    onChange={() => handleFilterChange("duration", duration)}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-[#0099FF] focus:ring-[#0099FF]"
                  />
                  <span className="text-sm">{duration}</span>
                </label>
              ))}
            </div>

            {/* Level */}
            <div>
              <h3 className="mb-2 font-semibold text-[#05264E]">Level</h3>
              {levels.map((level) => (
                <label key={level} className="mb-1 flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.level.includes(level)}
                    onChange={() => handleFilterChange("level", level)}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-[#0099FF] focus:ring-[#0099FF]"
                  />
                  <span className="text-sm">{level}</span>
                </label>
              ))}
            </div>

            {/* Price Range */}
            <div>
              <h3 className="mb-2 font-semibold text-[#05264E]">Price Range</h3>
              <div className="flex flex-col gap-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    onChange={() => handleFilterChange("priceRange", [0, 30000])}
                    checked={filters.priceRange?.[1] === 30000}
                    className="mr-2 h-4 w-4 rounded-full border-gray-300 text-[#0099FF] focus:ring-[#0099FF]"
                  />
                  <span className="text-sm">Under ₹30,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    onChange={() => handleFilterChange("priceRange", [30000, 50000])}
                    checked={filters.priceRange?.[0] === 30000 && filters.priceRange?.[1] === 50000}
                    className="mr-2 h-4 w-4 rounded-full border-gray-300 text-[#0099FF] focus:ring-[#0099FF]"
                  />
                  <span className="text-sm">₹30,000 - ₹50,000</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="priceRange"
                    onChange={() => handleFilterChange("priceRange", [50000, Infinity])}
                    checked={filters.priceRange?.[0] === 50000}
                    className="mr-2 h-4 w-4 rounded-full border-gray-300 text-[#0099FF] focus:ring-[#0099FF]"
                  />
                  <span className="text-sm">Above ₹50,000</span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-end">
            <Button variant="outline" size="sm" onClick={clearFilters}>
              Clear Filters
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CourseFilters;