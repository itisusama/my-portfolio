"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
// import { motion } from "framer-motion"
import { useState } from "react"
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt/>,
    title: "Phone",
    description: "+923074518566"
  },
  {
    icon: <FaEnvelope/>,
    title: "Personal Email",
    description: "ahmarkhan1233456@gmail.com"
  },
  {
    icon: <FaMapMarkedAlt/>,
    title: "Location",
    description: "Lahore Cantt"
  }
]


const Contact = () => {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      firstname,
      lastname,
      companyname: company,
      message,
    };

    try {
      const res = await fetch("https://personal-message-api.vercel.app/api/umessage/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        // Form submission successful
        setIsSubmitted(true);
        // Clear the form inputs after successful submission
        setFirstname("");
        setLastname("");
        setCompany("");
        setMessage("");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };



  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
          {!isSubmitted ? (
              // Show the form only if the message has not been submitted
              <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl" onSubmit={handleSubmit}>
                <h3 className="text-4xl text-accent">Let's work together</h3>
                <p className="text-white/60">
                  If you have any questions or want to discuss a project, feel free to reach out to me.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    type="text"
                    placeholder="Firstname"
                    required
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Lastname"
                    required
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
                <Input
                  type="text"
                  placeholder="Company name"
                  required
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
                <Textarea
                  className="h-[200px]"
                  placeholder="Type Your Message Here..."
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button type="submit" size="md" className="max-w-40" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            ) : (
              // Show the success message when the form is successfully submitted
              <div className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                <h3 className="text-4xl text-accent">Thank you!</h3>
                <p className="text-white/60">
                  Thanks for your response. I will reach you soon.
                </p>
              </div>
            )}
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {
                info.map((item, index) => (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div>{item.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-white/60">{item.title}</h3>
                      <p className="text-xl">{item.description}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
