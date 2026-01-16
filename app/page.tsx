import ItemsPage from "./items/page";

export default function HomePage() {
  return (
    <div>
      {/* 1. Hero */}
      <section className="py-24 text-center bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">
          Discover & Manage Items Easily
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          A simple Next.js application with authentication and item management.
        </p>
      </section>

      {/* 2. Features */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {["Fast", "Secure", "Scalable"].map((item) => (
          <div
            key={item}
            className="border p-6 rounded-lg text-center shadow-sm"
          >
            <h3 className="font-semibold text-lg mb-2">{item}</h3>
            <p className="text-sm text-gray-600">
              Built with modern Next.js architecture.
            </p>
          </div>
        ))}
      </section>

      {/* 3. How It Works */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-6">How It Works</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Browse items, view details, and manage products easily.
        </p>
      </section>

      {/* 4. Items Preview */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">Popular Items</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="border p-4 rounded-lg shadow-sm">
              <div className="h-40 bg-gray-200 mb-3 rounded" />
              <h3 className="font-semibold">Item {i}</h3>
              <p className="text-sm text-gray-600">
                Short item description here.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Pricing / Info */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-2xl font-bold mb-4">Simple & Free</h2>
        <p className="text-gray-600">
          No hidden cost. Just clean functionality.
        </p>
      </section>

      {/* 6. Testimonials */}
      <section className="py-16 max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold mb-6">What Users Say</h2>
        <p className="text-gray-600">
          “This app made item management super easy!”
        </p>
      </section>

      {/* 7. CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Now</h2>
        <p className="mb-6">Login and explore available items.</p>
        <a
          href="/login"
          className="inline-block bg-white text-blue-600 px-6 py-3 rounded font-medium"
        >
          Login
        </a>
      </section>
      <ItemsPage></ItemsPage>
    </div>
  );
}
