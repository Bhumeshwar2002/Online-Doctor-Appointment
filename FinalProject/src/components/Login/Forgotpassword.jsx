import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Forgot Password?
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Enter your registered email address below and we'll send you a link to reset your password.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block mb-2 font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold text-lg hover:bg-purple-700 transition duration-300"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Remember your password?{" "}
          <Link to="/login" className="text-purple-600 font-medium hover:underline">
            Back to Login
          </Link>
        </p>

        <div className="mt-10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
            alt="forgot password illustration"
            className="mx-auto w-28 h-28 opacity-80"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
