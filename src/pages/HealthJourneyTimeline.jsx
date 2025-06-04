import React, { useState } from "react";
import Layout from "../components/layout";

// Mock data for timeline events
const mockEvents = [
  {
    id: 1,
    type: "appointment",
    title: "Primary Care Appointment",
    date: "2024-07-10T09:00:00Z",
    status: "upcoming",
    location: "VA Medical Center, Main Clinic",
    details: "Annual check-up with Dr. Smith.",
    urgent: false,
  },
  {
    id: 2,
    type: "claim",
    title: "Disability Claim Submitted",
    date: "2024-06-15T00:00:00Z",
    status: "in progress",
    details: "Your claim is being reviewed.",
    urgent: false,
  },
  {
    id: 3,
    type: "prescription",
    title: "Prescription Refill Needed",
    date: "2024-06-20T00:00:00Z",
    status: "needs action",
    details: "Refill your blood pressure medication.",
    urgent: true,
  },
  {
    id: 4,
    type: "milestone",
    title: "VA Benefits Approved",
    date: "2024-05-01T00:00:00Z",
    status: "completed",
    details: "Your benefits are now active.",
    urgent: false,
  },
];

const eventTypeLabels = {
  appointment: "Appointments",
  claim: "Claims",
  prescription: "Prescriptions",
  milestone: "Milestones",
};

const statusLabels = {
  upcoming: "Upcoming",
  "in progress": "In Progress",
  "needs action": "Needs Action",
  completed: "Completed",
};

const eventTypeOrder = ["appointment", "claim", "prescription", "milestone"];

const HealthJourneyTimeline = () => {
  const [filter, setFilter] = useState("all");

  // Filter events by type
  const filteredEvents =
    filter === "all"
      ? mockEvents
      : mockEvents.filter((event) => event.type === filter);

  // Sort events by date descending
  const sortedEvents = [...filteredEvents].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <Layout title="Health Journey Timeline">
      <h1 className="vads-u-font-family--serif vads-u-font-size--h2 vads-u-margin-top--0 vads-u-margin-bottom--3 vads-u-font-weight--bold">
        My VA Health Journey Timeline
      </h1>
      <p className="va-introtext vads-u-font-family--sans vads-u-margin-bottom--4">
        View your recent and upcoming VA appointments, claims, prescriptions, and key milestones—all in one place. Stay on top of your health journey and take action when needed.
      </p>

      {/* Filter controls */}
      <div className="vads-u-margin-bottom--4 vads-u-display--flex vads-u-flex-wrap--wrap" role="group" aria-label="Filter timeline events">
        <button
          className={`usa-button vads-u-margin-right--2 vads-u-margin-bottom--2${filter === "all" ? " vads-u-background-color--primary vads-u-color--white" : " usa-button--outline"}`}
          onClick={() => setFilter("all")}
          aria-pressed={filter === "all"}
        >
          All
        </button>
        {eventTypeOrder.map((type) => (
          <button
            key={type}
            className={`usa-button vads-u-margin-right--2 vads-u-margin-bottom--2${filter === type ? " vads-u-background-color--primary vads-u-color--white" : " usa-button--outline"}`}
            onClick={() => setFilter(type)}
            aria-pressed={filter === type}
          >
            {eventTypeLabels[type]}
          </button>
        ))}
      </div>

      {/* Timeline (Process List) */}
      <section aria-label="Timeline of your VA health journey">
        <va-process-list>
          {sortedEvents.map((event) => (
            <va-process-list-item
              key={event.id}
              header={event.title}
              level={3}
            >
              <div className="vads-u-margin-bottom--2">
                <span className="vads-u-font-family--sans vads-u-font-size--sm vads-u-color--gray">
                  {new Date(event.date).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span className="vads-u-font-family--sans vads-u-font-size--sm vads-u-margin-left--2 vads-u-color--primary">
                  {statusLabels[event.status]}
                </span>
              </div>
              {event.urgent && (
                <va-alert
                  status="warning"
                  visible
                  class="vads-u-margin-bottom--2"
                  close-btn-aria-label="Close notification"
                >
                  <h3 slot="headline" className="vads-u-font-family--sans vads-u-font-size--h4">
                    Action Needed
                  </h3>
                  <p className="vads-u-font-family--sans vads-u-margin-y--0">
                    {event.details}
                  </p>
                </va-alert>
              )}
              <va-card class="vads-u-margin-bottom--2">
                <div className="vads-u-font-family--sans">
                  {event.details}
                  {event.location && (
                    <div className="vads-u-margin-top--1">
                      <strong>Location:</strong> {event.location}
                    </div>
                  )}
                </div>
              </va-card>
            </va-process-list-item>
          ))}
        </va-process-list>
      </section>
    </Layout>
  );
};

export default HealthJourneyTimeline; 