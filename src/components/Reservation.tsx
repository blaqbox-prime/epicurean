// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { IoCalendarClear, IoChevronDown, IoPersonOutline, IoTimeOutline } from 'react-icons/io5'
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';


function Reservation() {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<any> = (data: any) => {
        console.log(data)
            toast(`Reservation for ${data.person} successful!`, {
                autoClose: 5000,
                position: 'top-center'
            });
    };
  

  return (
    <section className="reservation" id="reservation-form">
          <div className="container">
            <div className="form reservation-form bg-black-10">
              <form onSubmit={handleSubmit(onSubmit)} className="form-left">
                <h2 className="headline-1 text-center">Online Reservation</h2>
                <p className="form-text text-center">
                  Booking request{" "}
                  <a href="tel:07458124578" className="link">
                    07458124578
                  </a>
                   or fill out the order form
                </p>

                <div className="input-wrapper">
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    className="input-field"
                    {...register("name",{required: true})}
                  />

                  <input
                    type="tel"
                    id="phone"
                    placeholder="Phone Number"
                    className="input-field"
                    {...register("phone",{required: true})}
                  />
                </div>

                <div className="input-wrapper">
                  <div className="icon-wrapper">
                    <IoPersonOutline aria-hidden />
                    <select id="" className="input-field" {...register("person",{required: true})}>
                      <option value="1">1 Person</option>
                      <option value="2">2 People</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People</option>
                      <option value="5">5 People</option>
                      <option value="6">6 People</option>
                      <option value="7">7 People</option>
                    </select>
                    <IoChevronDown aria-hidden />
                  </div>
                  <div className="icon-wrapper">
                    <IoCalendarClear />

                    <input
                      type="date"
                      id="date"
                      placeholder="Pick a date"
                      autoComplete="off"
                      className="input-field"
                      {...register("date",{required: true})}
                    />
                    <IoChevronDown aria-hidden />
                  </div>

                  <div className="icon-wrapper">
                    <IoTimeOutline />

                    <select id="" className="input-field" {...register("time",{required: true})}>
                      <option value="8:00">08:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="12:00">12:00 PM</option>
                      <option value="14:00">02:00 PM</option>
                      <option value="16:00">04:00 PM</option>
                      <option value="18:00">06:00 PM</option>
                      <option value="20:00">08:00 PM</option>
                    </select>

                    <IoChevronDown aria-hidden />
                  </div>

                </div>

                <textarea
                  placeholder="Message"
                  autoComplete="off"
                  id="message"
                  className="input-field"
                  {...register("message",{maxLength: 255})}
                ></textarea>

                <button type="submit" className="btn btn-secondary">
                  <span className="text text-1">Book A Table</span>
                  <span className="text text-2" aria-hidden>
                    Book A Table
                  </span>
                </button>
              </form>

              <div
                className="form-right text-center"
                style={{
                  backgroundImage: "url('assets/images/form-pattern.png')",
                }}
              >
                <h2 className="headline-1 text-center">Contact Us</h2>
                <p className="contact-label">Booking Request</p>
                <a
                  href="tel:04875124548"
                  className="body-1 contact-number hover-underline"
                >
                  04875124548
                </a>

                <div className="separat"></div>

                <p className="contact-label">Location</p>

                <address className="body-4">
                  7 Acacia St. Flora Park, Polokwane 0699, L
                </address>

                <p className="contact-label">Lunch Time</p>

                <p className="body-4">
                  Monday - Sunday <br />
                  11:00 AM - 2:30 PM
                </p>
              </div>
            </div>
          </div>
          <ToastContainer />
        </section>
  )
}

export default Reservation