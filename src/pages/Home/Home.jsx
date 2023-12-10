import React from "react";

import {
  AdditionalFeaturesSection,
  BusinessDurationSection,
  HeroSection,
  RentalBenefits,
  RentalHeading,
  RentalList,
  RentalSection,
  RentalText,
  ServiceItem,
  ServicesContainer,
  ServicesHeading,
  ServicesList,
  ServicesSection,
} from "./Home.styled";
import sprite from "../../images/sprite.svg";

const Home = () => {
  return (
    <div>
      <HeroSection>
        <h1>
          Rent a New Car in Ukraine with Address Delivery in Just One Hour
        </h1>
      </HeroSection>
      <ServicesSection>
        <ServicesContainer>
          <ServicesHeading>
            We offer the following services for your convenience
          </ServicesHeading>
          <ServicesList>
            <ServiceItem>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-car-insurance"} />
                </svg>
              </div>
              Car Insurance
              <p>
                Travel with peace of mind as we manage all risks with valid
                insurance policies for all our cars.
              </p>
            </ServiceItem>
            <ServiceItem>
              <div>
                <svg width="18" height="18">
                  <use
                    href={
                      sprite +
                      "#icon-gps-location-marker-road-map-navigation-svgrepo-com"
                    }
                  />
                </svg>
              </div>
              GPS Navigation
              <p>
                Never worry about getting lost; our GPS navigation devices will
                calculate the best route for you, saving you time.
              </p>
            </ServiceItem>
            <ServiceItem>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-car-seat"} />
                </svg>
              </div>
              Child Safety Seat
              <p>
                Ensure the safety of your little ones during travel with our
                comfortable child safety seats.
              </p>
            </ServiceItem>
            <ServiceItem>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-wifi-logo"} />
                </svg>
              </div>
              Wi-Fi
              <p>
                Stay connected on the go with high-speed Wi-Fi internet in our
                vehicles.
              </p>
            </ServiceItem>
            <ServiceItem>
              <div>
                <svg width="18" height="18">
                  <use
                    href={
                      sprite +
                      "#icon-concierge-desk-concierge-help-desk-communications-department"
                    }
                  />
                </svg>
              </div>
              Concierge Service
              <p>
                Enjoy round-the-clock support for any inquiries, whether it's
                hotel reservations or assistance in finding the best tours and
                products.
              </p>
            </ServiceItem>
            <ServiceItem>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-technical-support"} />
                </svg>
              </div>
              Roadside Assistance
              <p>
                Whether you've run out of fuel, need a broken wheel replaced, or
                your battery needs charging, contact us, and our team will
                promptly arrive to assist you on the road.
              </p>
            </ServiceItem>
          </ServicesList>
        </ServicesContainer>
      </ServicesSection>
      <RentalSection>
        <RentalHeading>
          Discover Excellent Deals for Your Car Rental in Ukraine
        </RentalHeading>
        <RentalText>
          Car rental is the optimal solution for navigating bustling cities
          throughout the year. Company offers car rental services in key cities
          across Ukraine, with branches situated in Cherkasy, Kherson,
          Chernihiv, Ternopil, Dnipro, Lviv, Vinnytsia, and Lutsk.
        </RentalText>
        <RentalText>
          Our car rental services encompass a diverse selection of vehicles
          available for hire, ranging from economical options like the Chevrolet
          Spark to luxurious sedans such as the Mercedes S Class, as well as
          SUVs like the Audi Q7 and Toyota Land Cruiser 200. When utilizing our
          website to rent a car, you have the freedom to select a particular
          model rather than being limited to a specific car class.
        </RentalText>
        <RentalHeading>What is the Rental Fee for Hiring a Car?</RentalHeading>
        <RentalText>
          The cost of renting a car comprises three key elements:
        </RentalText>
        <RentalList>
          <li>
            <div>
              <svg width="18" height="18">
                <use href={sprite + "#icon-check"} />
              </svg>
            </div>
            The vehicle class: Rates begin at $10 per day for an economy car,
            while premium car rentals start at $100.
          </li>
          <li>
            <div>
              <svg width="18" height="18">
                <use href={sprite + "#icon-check"} />
              </svg>
            </div>
            Duration of the car rental: The longer the rental period, the lower
            the daily cost. Significant savings typically begin with a rental
            period of 4 to 7 days.
          </li>
          <li>
            <div>
              <svg width="18" height="18">
                <use href={sprite + "#icon-check"} />
              </svg>
            </div>
            Deposit requirement: At Car rental, you have the option to rent a
            car without providing a deposit. However, in such cases, there is a
            slight increase in the daily rental cost.
          </li>
        </RentalList>
        <RentalText>
          Every rental car is covered comprehensively by both CASCO and MTPL
          insurance, with no consideration of the deductible.
        </RentalText>
        <RentalBenefits>
          <h3>Our Benefits</h3>
          <p>
            We take pride in the increasing preference of our daily car rental
            service among both Ukrainians and visitors to the country. Several
            factors contribute to this choice
          </p>
          <ul>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              We provide an extensive range of rental cars, offering a selection
              of over 250 vehicles on our car rental site. This allows you to
              choose a specific car of your preference rather than being limited
              to a car class. All the cars we offer for rent are brand new, with
              none older than three years.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              We boast a wide price range, coupled with ongoing promotions and
              discounts on our car rental services. Our website displays
              transparent pricing, ensuring no hidden or additional fees.
              Moreover, we have a dedicated loyalty program for our regular
              customers.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Renting a car is made easy with just a few clicks. Simply choose
              the car model, select the rental period, and provide your contact
              number. Our operator will promptly get in touch to finalize
              details and confirm your car rental order.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Our car rental services operate 24/7, including holidays and
              weekends, with our managers available round the clock to assist
              you. We offer targeted delivery of the rented car, eliminating the
              need for you to travel to a specific location.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Car delivery is available throughout Ukraine, allowing you to rent
              a car without visiting our office. Just provide the delivery
              address, and the car will be ready for you at the specified time,
              even in cities where our branches are not yet established.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              We value our clients' time, ensuring a swift and hassle-free
              rental process, which takes only 5-10 minutes, even for
              deposit-free transactions. Upon completion, you'll receive the
              keys and a fully fueled vehicle.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Our services extend beyond car rental, including a Concierge
              Service providing 24-hour support for various needs such as hotel
              reservations, item searches, and restaurant bookings. We even
              assist in caring for pets left at home.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Technical support is available 24/7 to address any issues that may
              arise on the road, from flat tires to dead batteries. Our expert
              team is always ready to resolve any technical concerns related to
              the rented vehicle.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Rest assured, our rental cars are fully equipped, regularly
              maintained, and undergo thorough sanitation processes for your
              safety and comfort.
            </li>
          </ul>
        </RentalBenefits>
        <AdditionalFeaturesSection>
          <h3>Additional Features</h3>
          <p>
            Car rental provides a variety of supplementary choices for our
            customers, offering additional options that can enhance your car
            rental experience:
          </p>
          <ul>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              GPS navigation system: Navigate efficiently in unfamiliar areas
              and reach your destination via the shortest route.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Child safety seat: Guarantee maximum comfort and safety for your
              child during the car rental.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              Wi-Fi: Provide wireless internet access for all passengers during
              the journey.
            </li>
            <li>
              <div>
                <svg width="18" height="18">
                  <use href={sprite + "#icon-check"} />
                </svg>
              </div>
              GoPro: Record your trip in high-quality video.
            </li>
          </ul>
        </AdditionalFeaturesSection>
        <BusinessDurationSection>
          <h3>Extended Duration Car Rental for Business Needs</h3>
          <div>
            <p>
              We provide a distinct service at our car rental agency tailored
              specifically for businesses. This service enables your company to
              access contemporary vehicles for its exclusive use, eliminating
              the expenses associated with permanent maintenance. You utilize
              these vehicles as needed, such as attending client meetings or
              picking up business partners from the airport, particularly when a
              chauffeur is required. Additionally, this car rental service
              proves invaluable when your company requires temporary vehicles
              for employees during business trips. A crucial aspect for
              businesses is that the rental price already encompasses VAT.
            </p>
          </div>
        </BusinessDurationSection>
      </RentalSection>
    </div>
  );
};

export default Home;
