import { CheckCircle } from "lucide-react";

/**
 * DESIGN SHOWCASE COMPONENT
 *
 * This component demonstrates the application of CRAP principles
 * and fundamental design guidelines in the RentEase platform.
 *
 * Use this as a reference for understanding how design principles
 * are implemented throughout the application.
 */

export function DesignShowcase() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Design Principles Showcase
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            RentEase applies CRAP principles (Contrast, Repetition, Alignment,
            Proximity) and fundamental design guidelines to create an
            exceptional user experience.
          </p>
        </div>

        {/* CONTRAST Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-blue-600 p-3 rounded-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Contrast
              </h2>
              <p className="text-gray-600">
                Elements that are different should be very different
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Typography Contrast */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Typography Scale
              </h3>
              <div className="space-y-3">
                <div className="text-4xl font-bold text-gray-900">H1</div>
                <div className="text-3xl font-bold text-gray-900">H2</div>
                <div className="text-xl font-semibold text-gray-900">H3</div>
                <div className="text-base text-gray-700">Body</div>
                <div className="text-sm text-gray-600">Small</div>
              </div>
            </div>

            {/* Color Contrast */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Color Hierarchy
              </h3>
              <div className="space-y-2">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded">
                  Primary
                </div>
                <div className="bg-gray-900 text-white p-3 rounded">
                  Headings
                </div>
                <div className="bg-gray-700 text-white p-3 rounded">Body</div>
                <div className="bg-gray-400 text-white p-3 rounded">
                  Secondary
                </div>
              </div>
            </div>

            {/* Size Contrast */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Button Sizes
              </h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold">
                  Large
                </button>
                <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-medium">
                  Medium
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                  Small
                </button>
              </div>
            </div>

            {/* Shadow Contrast */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Shadow Elevation
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-3 rounded shadow-sm">Level 1</div>
                <div className="bg-white p-3 rounded shadow-md">Level 2</div>
                <div className="bg-white p-3 rounded shadow-lg">Level 3</div>
                <div className="bg-white p-3 rounded shadow-xl">Level 4</div>
              </div>
            </div>
          </div>
        </div>

        {/* REPETITION Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-green-600 p-3 rounded-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Repetition
              </h2>
              <p className="text-gray-600">
                Repeat visual elements to create consistency and unity
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Repeated Card Pattern */}
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200"
              >
                <div className="bg-blue-100 p-3 rounded-lg w-fit mb-4">
                  <CheckCircle className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Card Title {num}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  This card uses the same structure, spacing, and styling as all
                  other cards.
                </p>
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Action Button
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-gray-700">
              <strong>Repeated Elements:</strong> Border radius (rounded-xl),
              padding (p-6), icon container (bg-blue-100), button style, shadow
              elevation
            </p>
          </div>
        </div>

        {/* ALIGNMENT Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-purple-600 p-3 rounded-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Alignment
              </h2>
              <p className="text-gray-600">
                Every element should have a visual connection
              </p>
            </div>
          </div>

          {/* Grid Alignment Demo */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Grid System Alignment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-blue-50 p-6 rounded-lg">
              <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
              <div className="bg-white p-6 rounded-lg border-2 border-blue-300">
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              All cards align to the same grid, with consistent spacing and
              internal alignment
            </p>
          </div>

          {/* Text Alignment Demo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 text-left">
                Left Aligned
              </h4>
              <p className="text-sm text-gray-600 text-left">
                Body text and cards use left alignment for easy reading and
                scanning
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 text-center">
                Center Aligned
              </h4>
              <p className="text-sm text-gray-600 text-center">
                Hero sections and headings use center alignment for impact
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2 text-right">
                Right Aligned
              </h4>
              <p className="text-sm text-gray-600 text-right">
                Prices and secondary info use right alignment for emphasis
              </p>
            </div>
          </div>
        </div>

        {/* PROXIMITY Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-2 border-gray-200">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-600 p-3 rounded-lg">
              <CheckCircle className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Proximity
              </h2>
              <p className="text-gray-600">
                Group related items together to show they are related
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Good Proximity Example */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <CheckCircle className="text-green-600" size={20} />
                Good Proximity
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border-2 border-green-200">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    Main Title
                  </h4>
                  <p className="text-sm text-gray-600">
                    Subtitle close to title
                  </p>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-700 mb-2">
                    First paragraph of related content stays close together.
                  </p>
                  <p className="text-sm text-gray-700">
                    Second paragraph also stays close.
                  </p>
                </div>

                <div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium">
                    Action
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                Related elements are grouped with small gaps
              </p>
            </div>

            {/* Spacing Scale */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Spacing Scale
              </h3>
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 space-y-4">
                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Gap 2 (8px) - Very close
                  </div>
                  <div className="flex gap-2">
                    <div className="bg-blue-600 w-12 h-12 rounded"></div>
                    <div className="bg-blue-600 w-12 h-12 rounded"></div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Gap 4 (16px) - Related
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-blue-600 w-12 h-12 rounded"></div>
                    <div className="bg-blue-600 w-12 h-12 rounded"></div>
                  </div>
                </div>

                <div>
                  <div className="text-sm font-medium text-gray-700 mb-2">
                    Gap 8 (32px) - Separated
                  </div>
                  <div className="flex gap-8">
                    <div className="bg-blue-600 w-12 h-12 rounded"></div>
                    <div className="bg-blue-600 w-12 h-12 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Design Principles Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">CRAP Principles</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Contrast:</strong> Clear visual differences create
                    hierarchy
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Repetition:</strong> Consistent patterns build
                    recognition
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Alignment:</strong> Visual connections create unity
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Proximity:</strong> Grouping shows relationships
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Additional Principles
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Consistency:</strong> Same patterns throughout
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Readability:</strong> Clear typography and spacing
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Hierarchy:</strong> Most important elements stand
                    out
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={20} className="flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Accessibility:</strong> WCAG AA compliant
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
