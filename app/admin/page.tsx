"use client";

import React, { useState, useEffect } from "react";
import { 
  LayoutDashboard, 
  Calendar, 
  Calculator, 
  FileText, 
  Mail, 
  Users, 
  LogOut, 
  Plus, 
  Search, 
  Trash2, 
  Edit, 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Printer, 
  Download, 
  ChevronRight, 
  User, 
  Phone, 
  ShieldAlert, 
  DollarSign, 
  MapPin, 
  Car,
  Award,
  Send,
  Lock,
  ChevronDown
} from "lucide-react";
import "./admin.css";

// --- DEMO INITIAL DATA ---
const INITIAL_BOOKINGS = [
  { id: "B-1024", clientName: "Prince Faisal Al-Saud", clientEmail: "faisal@saudroyals.gov.sa", clientPhone: "+966 50 123 4567", route: "Riyadh Airport (RUH) to Ritz-Carlton", date: "2026-06-01", time: "14:30", vehicle: "Cadillac Escalade (VIP)", price: 1200, status: "Confirmed" },
  { id: "B-1025", clientName: "Sarah Jenkins", clientEmail: "s.jenkins@corporate.com", clientPhone: "+44 7911 123456", route: "Jeddah Airport (JED) to Makkah Hotel", date: "2026-06-02", time: "08:15", vehicle: "GMC Yukon XL", price: 850, status: "Pending" },
  { id: "B-1026", clientName: "Dr. Omar Al-Saeed", clientEmail: "omar.saeed@meduni.edu.sa", clientPhone: "+966 55 987 6543", route: "Madinah Airport (MED) to Al-Masjid an-Nabawi", date: "2026-06-03", time: "22:00", vehicle: "Mercedes V-Class", price: 600, status: "Confirmed" },
  { id: "B-1027", clientName: "Elena Rostova", clientEmail: "elena.r@luxurytravel.ru", clientPhone: "+7 915 222 3344", route: "Riyadh to Dammam (Intercity)", date: "2026-05-28", time: "11:00", vehicle: "Mercedes S-Class", price: 3500, status: "Completed" },
  { id: "B-1028", clientName: "Sheikh Khalid Mansour", clientEmail: "khalid@mansourcorp.com", clientPhone: "+971 50 888 9999", route: "Jeddah to Medina Ziyarat Tour", date: "2026-06-05", time: "07:00", vehicle: "Cadillac Escalade (VIP)", price: 4200, status: "Confirmed" }
];

const INITIAL_QUOTES = [
  { id: "Q-501", clientName: "John Matthews", clientEmail: "j.matthews@financegroup.com", route: "Riyadh Airport to Marriott Hotel", vehicle: "GMC Yukon XL", date: "2026-06-08", price: 750, status: "Sent" },
  { id: "Q-502", clientName: "Ayesha Siddiqua", clientEmail: "ayesha.s@umrahbuilders.com", route: "Makkah to Madinah (Intercity Transfer)", vehicle: "Mercedes V-Class", date: "2026-06-12", price: 1950, status: "Draft" },
  { id: "Q-503", clientName: "Marcus Thorne", clientEmail: "marcus@thornedev.co.uk", route: "Jeddah (JED) Airport to Ritz-Carlton Jeddah", vehicle: "Mercedes S-Class", date: "2026-06-10", price: 950, status: "Sent" }
];

const INITIAL_CLIENTS = [
  { id: "C-001", name: "Prince Faisal Al-Saud", email: "faisal@saudroyals.gov.sa", phone: "+966 50 123 4567", rides: 12, spend: 15400, notes: "Prefers cold Bottled water and Scented wipes in cabin." },
  { id: "C-002", name: "Sarah Jenkins", email: "s.jenkins@corporate.com", phone: "+44 7911 123456", rides: 2, spend: 1700, notes: "Requires child booster seat for infant." },
  { id: "C-003", name: "Dr. Omar Al-Saeed", email: "omar.saeed@meduni.edu.sa", phone: "+966 55 987 6543", rides: 7, spend: 4200, notes: "Senior passenger, needs helper service at baggage claim." },
  { id: "C-004", name: "Elena Rostova", email: "elena.r@luxurytravel.ru", phone: "+7 915 222 3344", rides: 5, spend: 9500, notes: "Speaks Russian/English. Requests silent drive." }
];

export default function AdminPage() {
  // Authentication & Navigation State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");

  // Core Data State (synchronized with localStorage)
  const [bookings, setBookings] = useState<any[]>([]);
  const [quotes, setQuotes] = useState<any[]>([]);
  const [clients, setClients] = useState<any[]>([]);

  // Search & Filter
  const [searchQuery, setSearchQuery] = useState("");

  // Booking Form State
  const [bfName, setBfName] = useState("");
  const [bfEmail, setBfEmail] = useState("");
  const [bfPhone, setBfPhone] = useState("");
  const [bfService, setBfService] = useState("Airport Transfer");
  const [bfVehicle, setBfVehicle] = useState("GMC Yukon XL");
  const [bfDate, setBfDate] = useState("");
  const [bfTime, setBfTime] = useState("");
  const [bfPickup, setBfPickup] = useState("");
  const [bfDropoff, setBfDropoff] = useState("");
  const [bfPrice, setBfPrice] = useState(850);

  // Quote Calculator State
  const [qfName, setQfName] = useState("");
  const [qfEmail, setQfEmail] = useState("");
  const [qfRoute, setQfRoute] = useState("");
  const [qfVehicle, setQfVehicle] = useState("GMC Yukon XL");
  const [qfDate, setQfDate] = useState("");
  const [qfBasePrice, setQfBasePrice] = useState(900);

  // Invoice Simulator State
  const [activeInvoice, setActiveInvoice] = useState<any>(null);
  const [invVat, setInvVat] = useState(15);
  const [invDiscount, setInvDiscount] = useState(0);
  const [invNotes, setInvNotes] = useState("Thank you for choosing Chauffeur Service KSA. Payment is due within 7 days of invoice date.");

  // Client Details Edit Modal State
  const [editingClient, setEditingClient] = useState<any>(null);

  // Letterhead State
  const [letterSubject, setLetterSubject] = useState("CONFIRMATION OF VIP GROUND TRANSPORT PROTOCOL");
  const [letterRecipient, setLetterRecipient] = useState("Office of the Royal Protocols\nRoyal Palace Executive Transport Board\nRiyadh, Kingdom of Saudi Arabia");
  const [letterDate, setLetterDate] = useState("May 30, 2026");
  const [letterBody, setLetterBody] = useState(
    "To Whom It May Concern,\n\nWe hereby confirm that Chauffeur Service KSA has been officially appointed to coordinate VIP ground transportation services for the upcoming international summit delegation in Makkah and Madinah.\n\nAll allocated vehicles, including full-size executive SUVs (GMC Yukon XL and Cadillac Escalade), have successfully undergone comprehensive safety audits. Chauffeurs assigned to this mission have also completed the necessary high-security credentials and protocol training to operate inside the central restricted zones.\n\nShould you require further passenger modifications or immediate assistance, please do not hesitate to contact our executive support team directly.\n\nSincerely,\n\nExecutive Operations Director\nChauffeur Service KSA"
  );

  // Email Notification Template State
  const [emailTemplateType, setEmailTemplateType] = useState("booking_confirmed");
  const [emailClientName, setEmailClientName] = useState("Sheikh Faisal Al-Saud");
  const [emailBookingId, setEmailBookingId] = useState("B-1024");
  const [emailRouteInfo, setEmailRouteInfo] = useState("Riyadh Airport (RUH) to Ritz-Carlton Hotel");
  const [emailPriceInfo, setEmailPriceInfo] = useState("1,200 SAR");
  const [emailDateInfo, setEmailDateInfo] = useState("June 01, 2026 at 14:30");
  const [emailOtpCode, setEmailOtpCode] = useState("942715");

  // Load from Storage
  useEffect(() => {
    // Session Auth persistence
    const savedSession = sessionStorage.getItem("admin_auth");
    if (savedSession === "true") {
      setIsLoggedIn(true);
    }

    // Bookings Data persistence
    const savedBookings = localStorage.getItem("admin_bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    } else {
      setBookings(INITIAL_BOOKINGS);
      localStorage.setItem("admin_bookings", JSON.stringify(INITIAL_BOOKINGS));
    }

    // Quotes Data persistence
    const savedQuotes = localStorage.getItem("admin_quotes");
    if (savedQuotes) {
      setQuotes(JSON.parse(savedQuotes));
    } else {
      setQuotes(INITIAL_QUOTES);
      localStorage.setItem("admin_quotes", JSON.stringify(INITIAL_QUOTES));
    }

    // Clients Data persistence
    const savedClients = localStorage.getItem("admin_clients");
    if (savedClients) {
      setClients(JSON.parse(savedClients));
    } else {
      setClients(INITIAL_CLIENTS);
      localStorage.setItem("admin_clients", JSON.stringify(INITIAL_CLIENTS));
    }
  }, []);

  // Save changes helper functions
  const saveBookings = (updated: any[]) => {
    setBookings(updated);
    localStorage.setItem("admin_bookings", JSON.stringify(updated));
  };

  const saveQuotes = (updated: any[]) => {
    setQuotes(updated);
    localStorage.setItem("admin_quotes", JSON.stringify(updated));
  };

  const saveClients = (updated: any[]) => {
    setClients(updated);
    localStorage.setItem("admin_clients", JSON.stringify(updated));
  };

  // Auth Action
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginPassword === "admin123" || loginPassword === "KSA2026") {
      setIsLoggedIn(true);
      sessionStorage.setItem("admin_auth", "true");
      setLoginError("");
    } else {
      setLoginError("Invalid Administrator credentials. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem("admin_auth");
  };

  // Price estimate calculator depending on choices
  useEffect(() => {
    let base = 500;
    if (bfService === "Intercity Transfer") base = 1500;
    else if (bfService === "Ziyarat Tour") base = 1200;
    else if (bfService === "Hourly Hire") base = 800;

    if (bfVehicle === "Cadillac Escalade (VIP)") base += 600;
    else if (bfVehicle === "Mercedes V-Class") base += 400;
    else if (bfVehicle === "Mercedes S-Class") base += 500;
    else if (bfVehicle === "GMC Yukon XL") base += 200;

    setBfPrice(base);
  }, [bfService, bfVehicle]);

  useEffect(() => {
    let base = 600;
    if (qfVehicle === "Cadillac Escalade (VIP)") base += 500;
    else if (qfVehicle === "Mercedes V-Class") base += 300;
    else if (qfVehicle === "Mercedes S-Class") base += 400;
    setQfBasePrice(base);
  }, [qfVehicle]);

  // CRUD actions for Bookings
  const addBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bfName || !bfPickup || !bfDropoff || !bfDate) {
      alert("Please fill all mandatory booking details.");
      return;
    }
    const newId = `B-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBookObj = {
      id: newId,
      clientName: bfName,
      clientEmail: bfEmail || `${bfName.toLowerCase().replace(/\s+/g, '')}@guest.com`,
      clientPhone: bfPhone || "+966 50 000 0000",
      route: `${bfPickup} to ${bfDropoff}`,
      date: bfDate,
      time: bfTime || "12:00",
      vehicle: bfVehicle,
      price: bfPrice,
      status: "Confirmed"
    };

    const newArr = [newBookObj, ...bookings];
    saveBookings(newArr);

    // Sync CRM
    if (!clients.some(c => c.name.toLowerCase() === bfName.toLowerCase())) {
      const newClientObj = {
        id: `C-${Math.floor(100 + Math.random() * 900)}`,
        name: bfName,
        email: newBookObj.clientEmail,
        phone: newBookObj.clientPhone,
        rides: 1,
        spend: bfPrice,
        notes: `Automatically registered from Booking ${newId}.`
      };
      saveClients([newClientObj, ...clients]);
    } else {
      const updatedClients = clients.map(c => {
        if (c.name.toLowerCase() === bfName.toLowerCase()) {
          return { ...c, rides: c.rides + 1, spend: c.spend + bfPrice };
        }
        return c;
      });
      saveClients(updatedClients);
    }

    // Reset Form & Switch
    setBfName("");
    setBfEmail("");
    setBfPhone("");
    setBfPickup("");
    setBfDropoff("");
    setBfDate("");
    setBfTime("");
    setActiveTab("bookings");
  };

  const deleteBooking = (id: string) => {
    if (confirm(`Are you sure you want to cancel booking ${id}?`)) {
      const updated = bookings.filter(b => b.id !== id);
      saveBookings(updated);
    }
  };

  const updateBookingStatus = (id: string, newStatus: string) => {
    const updated = bookings.map(b => {
      if (b.id === id) return { ...b, status: newStatus };
      return b;
    });
    saveBookings(updated);
  };

  // CRUD actions for Quotes
  const addQuote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!qfName || !qfRoute) {
      alert("Please fill all mandatory quote details.");
      return;
    }
    const newId = `Q-${Math.floor(500 + Math.random() * 500)}`;
    const newQuoteObj = {
      id: newId,
      clientName: qfName,
      clientEmail: qfEmail || `${qfName.toLowerCase().replace(/\s+/g, '')}@inquiry.com`,
      route: qfRoute,
      vehicle: qfVehicle,
      date: qfDate || "2026-06-10",
      price: qfBasePrice,
      status: "Sent"
    };

    const newArr = [newQuoteObj, ...quotes];
    saveQuotes(newArr);

    setQfName("");
    setQfEmail("");
    setQfRoute("");
    setQfDate("");
    setActiveTab("dashboard");
  };

  const deleteQuote = (id: string) => {
    if (confirm(`Are you sure you want to delete quote ${id}?`)) {
      const updated = quotes.filter(q => q.id !== id);
      saveQuotes(updated);
    }
  };

  const convertQuoteToBooking = (quote: any) => {
    const newId = `B-${Math.floor(1000 + Math.random() * 9000)}`;
    const newBook = {
      id: newId,
      clientName: quote.clientName,
      clientEmail: quote.clientEmail,
      clientPhone: "+966 50 000 0000",
      route: quote.route,
      date: quote.date,
      time: "12:00",
      vehicle: quote.vehicle,
      price: quote.price,
      status: "Confirmed"
    };
    saveBookings([newBook, ...bookings]);

    // Sync CRM
    if (!clients.some(c => c.name.toLowerCase() === quote.clientName.toLowerCase())) {
      const newClient = {
        id: `C-${Math.floor(100 + Math.random() * 900)}`,
        name: quote.clientName,
        email: quote.clientEmail,
        phone: "+966 50 000 0000",
        rides: 1,
        spend: quote.price,
        notes: `Converted from Quote ${quote.id}`
      };
      saveClients([newClient, ...clients]);
    } else {
      const updated = clients.map(c => {
        if (c.name.toLowerCase() === quote.clientName.toLowerCase()) {
          return { ...c, rides: c.rides + 1, spend: c.spend + quote.price };
        }
        return c;
      });
      saveClients(updated);
    }

    // Delete quote
    const updatedQuotes = quotes.filter(q => q.id !== quote.id);
    saveQuotes(updatedQuotes);

    alert(`Quote successfully converted to Booking ${newId}!`);
    setActiveTab("bookings");
  };

  // CRM Client Details update
  const saveClientDetails = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingClient) return;

    const updated = clients.map(c => {
      if (c.id === editingClient.id) return editingClient;
      return c;
    });
    saveClients(updated);
    setEditingClient(null);
  };

  const deleteClient = (id: string) => {
    if (confirm("Are you sure you want to remove this client? This will not remove their historical booking files.")) {
      const updated = clients.filter(c => c.id !== id);
      saveClients(updated);
    }
  };

  // Auto-fill values in transactional Email template editor when selecting preset booking
  const triggerEmailPrefill = (bookingId: string) => {
    const book = bookings.find(b => b.id === bookingId);
    if (book) {
      setEmailClientName(book.clientName);
      setEmailBookingId(book.id);
      setEmailRouteInfo(book.route);
      setEmailPriceInfo(`${book.price.toLocaleString()} SAR`);
      setEmailDateInfo(`${book.date} at ${book.time}`);
      alert(`Email fields successfully populated from ${bookingId}!`);
    }
  };

  // Copy raw HTML email template code to clipboard
  const handleCopyEmailHTML = () => {
    let emailHtml = "";
    if (emailTemplateType === "booking_confirmed") {
      emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>VIP Booking Confirmed - Chauffeur Service KSA</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: 'Poppins', Helvetica, Arial, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f6f6f6;">
    <tr>
      <td align="center" style="padding: 40px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.05); border-bottom: 4px solid #c9a227;">
          <!-- Header Banner -->
          <tr>
            <td align="center" style="background-color: #0b0b0b; padding: 40px 20px; border-bottom: 3px solid #c9a227;">
              <span style="font-size: 24px; color: #ffffff; letter-spacing: 2px; font-weight: bold; font-family: 'Playfair Display', Georgia, serif;">CHAUFFEUR SERVICE KSA</span>
              <div style="font-size: 11px; color: #c9a227; letter-spacing: 3px; margin-top: 5px; font-weight: 500;">ELITE ROYAL TRANSPORT</div>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding: 40px 30px;">
              <h2 style="margin: 0 0 20px 0; color: #111111; font-size: 20px; font-weight: 700;">Dear ${emailClientName},</h2>
              <p style="margin: 0 0 20px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                Your premium ground transportation booking has been successfully confirmed. A dedicated professional chauffeur and immaculate executive vehicle are fully assigned to your schedule.
              </p>
              <!-- Details Box -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fafafa; border-radius: 8px; border: 1px solid #eeeeee; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 20px;">
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" style="font-size: 14px; line-height: 1.8; color: #333333;">
                      <tr>
                        <td width="35%" style="font-weight: bold; color: #888888;">Booking ID:</td>
                        <td style="font-weight: bold; color: #c9a227;">${emailBookingId}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #888888;">Service Route:</td>
                        <td>${emailRouteInfo}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #888888;">Schedule:</td>
                        <td>${emailDateInfo}</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #888888;">Assigned Class:</td>
                        <td>Premium Executive SUV</td>
                      </tr>
                      <tr>
                        <td style="font-weight: bold; color: #888888;">Total Price:</td>
                        <td style="font-weight: bold;">${emailPriceInfo} (incl. VAT)</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 30px 0; color: #555555; font-size: 15px; line-height: 1.6;">
                Your professional driver will contact you exactly 2 hours prior to arrival with tracking links and vehicle plate information.
              </p>
              <!-- CTA Button -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="https://chauffeurserviceksa.com" target="_blank" style="background-color: #c9a227; color: #000000; text-decoration: none; padding: 14px 30px; border-radius: 50px; font-weight: bold; font-size: 14px; display: inline-block; letter-spacing: 1px; text-transform: uppercase;">Manage VIP Booking</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="background-color: #f7f7f7; padding: 30px 20px; text-align: center; font-size: 12px; color: #999999; border-top: 1px solid #eeeeee;">
              <p style="margin: 0 0 10px 0;">Kingdom of Saudi Arabia | VIP Corporate Desk</p>
              <p style="margin: 0;">© 2026 Chauffeur Service KSA. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;
    } else if (emailTemplateType === "otp_verification") {
      emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Security Verification Code - Chauffeur Service KSA</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f6f6f6; font-family: 'Poppins', Helvetica, Arial, sans-serif;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f6f6f6;">
    <tr>
      <td align="center" style="padding: 50px 0;">
        <table border="0" cellpadding="0" cellspacing="0" width="550" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.06); border-top: 4px solid #c9a227;">
          <tr>
            <td style="padding: 40px 35px;">
              <h2 style="margin: 0 0 15px 0; color: #111111; font-size: 20px; font-weight: bold;">Security Verification Code</h2>
              <p style="margin: 0 0 25px 0; color: #666666; font-size: 14px; line-height: 1.6;">
                We received a request to access your premium chauffeur account. Please use the secure one-time verification code (OTP) below to authenticate:
              </p>
              <!-- OTP Box -->
              <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fafafa; border-radius: 8px; border: 1px dashed #c9a227; text-align: center; margin-bottom: 25px;">
                <tr>
                  <td style="padding: 25px 15px;">
                    <span style="font-size: 32px; font-weight: 800; letter-spacing: 8px; color: #111111; font-family: monospace;">${emailOtpCode}</span>
                  </td>
                </tr>
              </table>
              <p style="margin: 0 0 30px 0; color: #888888; font-size: 12px; line-height: 1.5; text-align: center;">
                This code is highly sensitive and will remain valid for exactly 10 minutes. Never share this code with anyone, including our support agents.
              </p>
              <p style="margin: 0; color: #666666; font-size: 13px;">
                If you did not initiate this authentication request, please immediately contact our VIP emergency security desk.
              </p>
            </td>
          </tr>
          <tr>
            <td style="background-color: #0b0b0b; padding: 20px; text-align: center; color: #777777; font-size: 11px;">
              CHAUFFEUR SERVICE KSA | ROYAL PORTAL DEPT
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `;
    }

    navigator.clipboard.writeText(emailHtml);
    alert("HTML Email template successfully copied to clipboard!");
  };

  // Search filter implementation
  const filteredBookings = bookings.filter(b => 
    b.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.route.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    b.vehicle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    c.phone.includes(searchQuery)
  );

  // Financial Stats calculations
  const totalRevenue = bookings.reduce((sum, b) => b.status === "Completed" || b.status === "Confirmed" ? sum + b.price : sum, 0);
  const activeBookingsCount = bookings.filter(b => b.status === "Confirmed").length;
  const pendingBookingsCount = bookings.filter(b => b.status === "Pending").length;

  return (
    <div className="admin-body">
      {!isLoggedIn ? (
        // --- AUTHENTICATION LOGIN OVERLAY ---
        <div style={{
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          minHeight: "100vh", 
          background: "linear-gradient(135deg, #070707 0%, #151515 100%)",
          padding: "1rem"
        }}>
          <div className="admin-card border-gold-glow" style={{ width: "100%", maxWidth: "420px", padding: "3rem 2.5rem" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div style={{ 
                width: "60px", 
                height: "60px", 
                borderRadius: "50%", 
                background: "rgba(201, 162, 39, 0.1)", 
                border: "1px solid var(--color-gold)", 
                display: "inline-flex", 
                alignItems: "center", 
                justifyContent: "center",
                color: "var(--color-gold)",
                marginBottom: "1rem"
              }}>
                <Lock size={28} />
              </div>
              <h1 style={{ color: "#ffffff", fontSize: "1.8rem", marginBottom: "0.5rem", fontFamily: "var(--font-playfair)" }}>
                Executive Gatekeeper
              </h1>
              <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Chauffeur Service KSA Admin
              </p>
            </div>

            <form onSubmit={handleLogin}>
              <div className="admin-input-group" style={{ marginBottom: "1.5rem" }}>
                <label>System Access Key</label>
                <input 
                  type="password" 
                  className="admin-input" 
                  placeholder="••••••••••••••" 
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  style={{ textAlign: "center", fontSize: "1.2rem", letterSpacing: "0.15em" }}
                />
              </div>

              {loginError && (
                <div style={{ 
                  background: "rgba(239, 68, 68, 0.1)", 
                  border: "1px solid rgba(239, 68, 68, 0.3)", 
                  borderRadius: "8px", 
                  padding: "0.75rem", 
                  color: "#f87171", 
                  fontSize: "0.85rem", 
                  marginBottom: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem"
                }}>
                  <ShieldAlert size={16} />
                  <span>{loginError}</span>
                </div>
              )}

              <button type="submit" className="btn-admin-gold" style={{ width: "100%", padding: "1rem" }}>
                Unlock Dashboard
              </button>
            </form>

            <div style={{ marginTop: "2rem", textAlign: "center" }}>
              <p style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: "0.8rem" }}>
                Authorized VIP Admin Personnel Only. <br/>Default Bypass Key is: <strong style={{ color: "var(--color-gold)" }}>admin123</strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        // --- MASTER ADMIN INTERFACE ---
        <div style={{ display: "flex", minHeight: "100vh" }}>
          
          {/* SIDEBAR NAVIGATION */}
          <aside className="admin-sidebar no-print">
            <div className="admin-sidebar-logo">
              <div style={{ 
                background: "var(--color-gold)", 
                color: "#000000", 
                width: "36px", 
                height: "36px", 
                borderRadius: "8px", 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center",
                fontWeight: "bold",
                fontSize: "1.2rem",
                fontFamily: "var(--font-playfair)"
              }}>
                C
              </div>
              <span style={{ 
                fontFamily: "var(--font-playfair)", 
                color: "#ffffff", 
                fontWeight: "bold", 
                fontSize: "1.3rem",
                letterSpacing: "0.05em"
              }}>
                CHAUFFEUR <span style={{ color: "var(--color-gold)" }}>KSA</span>
              </span>
            </div>

            <nav className="admin-sidebar-menu">
              <div 
                className={`admin-menu-item ${activeTab === "dashboard" ? "active" : ""}`}
                onClick={() => { setActiveTab("dashboard"); setActiveInvoice(null); }}
              >
                <LayoutDashboard size={20} />
                <span>Overview</span>
              </div>
              <div 
                className={`admin-menu-item ${activeTab === "bookings" ? "active" : ""}`}
                onClick={() => { setActiveTab("bookings"); setActiveInvoice(null); }}
              >
                <Calendar size={20} />
                <span>Bookings ({bookings.length})</span>
              </div>
              <div 
                className={`admin-menu-item ${activeTab === "quote" ? "active" : ""}`}
                onClick={() => { setActiveTab("quote"); setActiveInvoice(null); }}
              >
                <Calculator size={20} />
                <span>Quote Calculator</span>
              </div>
              <div 
                className={`admin-menu-item ${activeTab === "clients" ? "active" : ""}`}
                onClick={() => { setActiveTab("clients"); setActiveInvoice(null); }}
              >
                <Users size={20} />
                <span>VIP Clients CRM</span>
              </div>
              <div 
                className={`admin-menu-item ${activeTab === "letterhead" ? "active" : ""}`}
                onClick={() => { setActiveTab("letterhead"); setActiveInvoice(null); }}
              >
                <FileText size={20} />
                <span>Letterhead Dispatch</span>
              </div>
              <div 
                className={`admin-menu-item ${activeTab === "email" ? "active" : ""}`}
                onClick={() => { setActiveTab("email"); setActiveInvoice(null); }}
              >
                <Mail size={20} />
                <span>Email Mailers</span>
              </div>
            </nav>

            <div style={{ marginTop: "auto", borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem" }}>
              <div className="admin-menu-item" onClick={handleLogout} style={{ color: "#f87171" }}>
                <LogOut size={20} />
                <span>Lock Console</span>
              </div>
            </div>
          </aside>

          {/* MAIN ADMINISTRATIVE CONTENT CONTAINER */}
          <main className="admin-main">
            
            {/* ADMIN NAV BAR */}
            <header className="no-print" style={{ 
              display: "flex", 
              justifyContent: "space-between", 
              alignItems: "center", 
              marginBottom: "2.5rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              paddingBottom: "1.5rem"
            }}>
              <div>
                <h2 style={{ fontSize: "1.8rem", color: "#ffffff", fontFamily: "var(--font-playfair)" }}>
                  {activeTab === "dashboard" && "Command Control Centre"}
                  {activeTab === "bookings" && "Active Booking Logs"}
                  {activeTab === "quote" && "VIP Quote Engine & Estimator"}
                  {activeTab === "clients" && "Client Relationship Management"}
                  {activeTab === "letterhead" && "Executive Dispatch Desk"}
                  {activeTab === "email" && "Transactional Mailer Studio"}
                  {activeInvoice && "Commercial Invoice Prerender"}
                </h2>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>
                  System Status: <span style={{ color: "#4ade80", fontWeight: "bold" }}>● Online</span> | VIP Fleet Security Verified
                </p>
              </div>

              {/* SEARCH FIELD BAR */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div style={{ position: "relative" }}>
                  <Search size={18} style={{ 
                    position: "absolute", 
                    left: "12px", 
                    top: "50%", 
                    transform: "translateY(-50%)", 
                    color: "rgba(255,255,255,0.4)" 
                  }} />
                  <input 
                    type="text" 
                    placeholder="Search logs, names, IDs..." 
                    className="admin-input" 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ paddingLeft: "2.5rem", width: "240px", fontSize: "0.85rem" }}
                  />
                </div>

                <div style={{ 
                  background: "rgba(255,255,255,0.03)", 
                  border: "1px solid rgba(255,255,255,0.08)", 
                  padding: "0.5rem 1rem", 
                  borderRadius: "8px", 
                  display: "flex", 
                  alignItems: "center", 
                  gap: "0.5rem" 
                }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#c9a227" }} />
                  <span style={{ fontSize: "0.85rem", fontWeight: 600 }}>HQ Riyadh</span>
                </div>
              </div>
            </header>

            {/* --- WORKSPACE RENDER VIEWPORTS --- */}
            
            {activeInvoice ? (
              // --- INVOICE VIEWPORT IN WORKSPACE ---
              <div className="animated-view">
                <div className="no-print" style={{ marginBottom: "2rem", display: "flex", gap: "1rem", justifyContent: "flex-end" }}>
                  <button className="btn-admin-outline" onClick={() => setActiveInvoice(null)}>
                    Back to Bookings
                  </button>
                  <button className="btn-admin-gold" onClick={() => window.print()}>
                    <Printer size={18} /> Print Commercial Invoice
                  </button>
                </div>

                <div className="invoice-sheet printable-area">
                  <div className="invoice-header">
                    <div>
                      <div style={{ fontSize: "1.5rem", fontWeight: "bold", fontFamily: "var(--font-playfair)", letterSpacing: "1px" }}>
                        CHAUFFEUR SERVICE KSA
                      </div>
                      <div style={{ color: "#c9a227", fontSize: "0.75rem", letterSpacing: "3px", fontWeight: "bold", marginTop: "2px" }}>
                        ELITE ROYAL GROUND TRANSPORT
                      </div>
                      <p style={{ fontSize: "0.75rem", color: "#666", marginTop: "1rem", lineHeight: "1.5" }}>
                        Olaya District, Executive Towers Complex<br/>
                        Riyadh, Kingdom of Saudi Arabia<br/>
                        Lic No: KSA-99427-A
                      </p>
                    </div>

                    <div className="invoice-details">
                      <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#c9a227" }}>INVOICE</div>
                      <p style={{ fontWeight: "bold" }}>#{activeInvoice.id.replace("B-", "INV-")}</p>
                      <p style={{ fontSize: "0.85rem", color: "#555" }}>
                        Date: {activeInvoice.date}<br/>
                        Due: Immediate upon pickup<br/>
                        Payment Ref: {activeInvoice.id}
                      </p>
                    </div>
                  </div>

                  <div className="invoice-grid">
                    <div>
                      <div className="invoice-section-title">Client Details</div>
                      <p style={{ fontWeight: "bold", fontSize: "1.1rem" }}>{activeInvoice.clientName}</p>
                      <p style={{ fontSize: "0.85rem", color: "#444", marginTop: "0.25rem", lineHeight: "1.4" }}>
                        Email: {activeInvoice.clientEmail}<br/>
                        Phone: {activeInvoice.clientPhone}
                      </p>
                    </div>

                    <div>
                      <div className="invoice-section-title">Dispatch Vehicle & Driver</div>
                      <p style={{ fontWeight: "bold", fontSize: "1.05rem" }}>{activeInvoice.vehicle}</p>
                      <p style={{ fontSize: "0.85rem", color: "#444", marginTop: "0.25rem" }}>
                        Chauffeur Class: Executive Vetted Protocol Chauffeur<br/>
                        Fleet Status: Sanitized / Fully Fueled
                      </p>
                    </div>
                  </div>

                  <table className="invoice-table">
                    <thead>
                      <tr>
                        <th>Description of VIP Service</th>
                        <th style={{ textAlign: "right" }}>Base rate</th>
                        <th style={{ textAlign: "right" }}>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Premium Ground Transit</strong><br/>
                          <span style={{ fontSize: "0.8rem", color: "#666" }}>
                            Route: {activeInvoice.route}<br/>
                            Schedule Date: {activeInvoice.date} at {activeInvoice.time}
                          </span>
                        </td>
                        <td style={{ textAlign: "right" }}>{activeInvoice.price.toLocaleString()} SAR</td>
                        <td style={{ textAlign: "right", fontWeight: "bold" }}>{activeInvoice.price.toLocaleString()} SAR</td>
                      </tr>
                    </tbody>
                  </table>

                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2rem", marginTop: "2rem" }}>
                    <div style={{ fontSize: "0.8rem", color: "#666" }}>
                      <div style={{ fontWeight: "bold", color: "#222", marginBottom: "0.5rem" }}>Important Invoice Notes:</div>
                      <p style={{ lineHeight: "1.6" }}>{invNotes}</p>
                    </div>

                    <div className="invoice-totals">
                      <div className="invoice-total-row">
                        <span>Subtotal (SAR)</span>
                        <span>{activeInvoice.price.toLocaleString()}</span>
                      </div>
                      <div className="invoice-total-row">
                        <span>VAT ({invVat}%)</span>
                        <span>{((activeInvoice.price * invVat) / 100).toLocaleString()}</span>
                      </div>
                      <div className="invoice-total-row" style={{ color: "#f87171" }}>
                        <span>Discount ({invDiscount}%)</span>
                        <span>-{((activeInvoice.price * invDiscount) / 100).toLocaleString()}</span>
                      </div>
                      <div className="invoice-total-row invoice-total-grand">
                        <span>Grand Total (SAR)</span>
                        <span>{(activeInvoice.price + (activeInvoice.price * invVat) / 100 - (activeInvoice.price * invDiscount) / 100).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="invoice-footer" style={{ marginTop: "4rem", borderTop: "1px solid #eee", paddingTop: "1.5rem", textAlign: "center", fontSize: "0.75rem", color: "#999" }}>
                    This is an officially certified luxury corporate billing receipt. Generated on {new Date().toLocaleDateString()}.
                  </div>
                </div>

                <div className="admin-card no-print" style={{ marginTop: "2rem" }}>
                  <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "#ffffff" }}>Customize Invoice Calculations</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem" }}>
                    <div className="admin-input-group">
                      <label>Set Value Added Tax (VAT %)</label>
                      <input type="number" className="admin-input" value={invVat} onChange={(e) => setInvVat(Number(e.target.value))} />
                    </div>
                    <div className="admin-input-group">
                      <label>Apply Discount (%)</label>
                      <input type="number" className="admin-input" value={invDiscount} onChange={(e) => setInvDiscount(Number(e.target.value))} />
                    </div>
                    <div className="admin-input-group" style={{ gridColumn: "span 2" }}>
                      <label>Payment Terms / Footer notes</label>
                      <input type="text" className="admin-input" value={invNotes} onChange={(e) => setInvNotes(e.target.value)} />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              // --- STANDARD DASHBOARD TABS VIEW ---
              <div className="animated-view">
                
                {/* 1. OVERVIEW / DASHBOARD TAB */}
                {activeTab === "dashboard" && (
                  <div>
                    {/* STATS ANALYTICS WIDGETS */}
                    <div className="stats-grid">
                      <div className="admin-card stat-card">
                        <div className="stat-info">
                          <h3>Total Booked Volume</h3>
                          <p>{bookings.length} Rides</p>
                        </div>
                        <div className="stat-icon-wrapper">
                          <Calendar size={22} />
                        </div>
                      </div>

                      <div className="admin-card stat-card">
                        <div className="stat-info">
                          <h3>Estimated Revenue</h3>
                          <p>SAR {totalRevenue.toLocaleString()}</p>
                        </div>
                        <div className="stat-icon-wrapper">
                          <DollarSign size={22} />
                        </div>
                      </div>

                      <div className="admin-card stat-card">
                        <div className="stat-info">
                          <h3>Active VIP Chauffeurs</h3>
                          <p>18 Active</p>
                        </div>
                        <div className="stat-icon-wrapper">
                          <Award size={22} />
                        </div>
                      </div>

                      <div className="admin-card stat-card">
                        <div className="stat-info">
                          <h3>Inquiries pending</h3>
                          <p>{quotes.length} Quotes</p>
                        </div>
                        <div className="stat-icon-wrapper">
                          <Clock size={22} />
                        </div>
                      </div>
                    </div>

                    {/* INTERACTIVE GRIDS & GRAPHICS */}
                    <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "1.5rem", marginBottom: "2.5rem" }}>
                      
                      {/* LUXURY ANALYTICS VECTOR CHART */}
                      <div className="admin-card" style={{ display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                          <div>
                            <h3 style={{ fontSize: "1.2rem", color: "#ffffff" }}>VIP Revenue Flow Trajectory</h3>
                            <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.4)" }}>Calculated quarterly trends across major KSA cities</p>
                          </div>
                          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--color-gold)", fontSize: "0.85rem", fontWeight: "bold" }}>
                            <TrendingUp size={16} />
                            <span>+24.8% YoY</span>
                          </div>
                        </div>

                        {/* HIGH FIDELITY SVG CHART DRAWN MANUALLY */}
                        <div style={{ flexGrow: 1, minHeight: "220px", position: "relative", width: "100%" }}>
                          <svg viewBox="0 0 500 200" style={{ width: "100%", height: "220px" }}>
                            <defs>
                              <linearGradient id="glowGrad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="var(--color-gold)" stopOpacity="0.4"/>
                                <stop offset="100%" stopColor="var(--color-gold)" stopOpacity="0"/>
                              </linearGradient>
                            </defs>
                            
                            {/* Grid Guidelines */}
                            <line x1="0" y1="40" x2="500" y2="40" stroke="rgba(255,255,255,0.05)" strokeDasharray="5,5" />
                            <line x1="0" y1="90" x2="500" y2="90" stroke="rgba(255,255,255,0.05)" strokeDasharray="5,5" />
                            <line x1="0" y1="140" x2="500" y2="140" stroke="rgba(255,255,255,0.05)" strokeDasharray="5,5" />
                            
                            {/* Filled Gradient Area */}
                            <path d="M 0,200 L 0,160 Q 100,120 200,90 T 400,60 L 500,30 L 500,200 Z" fill="url(#glowGrad)" />
                            
                            {/* Line Path */}
                            <path d="M 0,160 Q 100,120 200,90 T 400,60 L 500,30" fill="none" stroke="var(--color-gold)" strokeWidth="3" />
                            
                            {/* SVG Nodes */}
                            <circle cx="0" cy="160" r="4" fill="#ffffff" stroke="var(--color-gold)" strokeWidth="2" />
                            <circle cx="100" cy="130" r="4" fill="#ffffff" stroke="var(--color-gold)" strokeWidth="2" />
                            <circle cx="200" cy="90" r="4" fill="#ffffff" stroke="var(--color-gold)" strokeWidth="2" />
                            <circle cx="300" cy="75" r="4" fill="#ffffff" stroke="var(--color-gold)" strokeWidth="2" />
                            <circle cx="400" cy="60" r="4" fill="#ffffff" stroke="var(--color-gold)" strokeWidth="2" />
                            <circle cx="500" cy="30" r="5" fill="#ffffff" stroke="var(--color-gold)" strokeWidth="2" />
                            
                            {/* Text labels */}
                            <text x="5" y="190" fill="rgba(255,255,255,0.3)" fontSize="10">Jan</text>
                            <text x="100" y="190" fill="rgba(255,255,255,0.3)" fontSize="10">Feb</text>
                            <text x="200" y="190" fill="rgba(255,255,255,0.3)" fontSize="10">Mar</text>
                            <text x="300" y="190" fill="rgba(255,255,255,0.3)" fontSize="10">Apr</text>
                            <text x="400" y="190" fill="rgba(255,255,255,0.3)" fontSize="10">May</text>
                            <text x="460" y="190" fill="rgba(255,255,255,0.3)" fontSize="10">Jun (Forecast)</text>
                          </svg>
                        </div>
                      </div>

                      {/* QUICK QUOTE CALCULATOR IN OVERVIEW */}
                      <div className="admin-card">
                        <h3 style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "1.25rem" }}>Quick Dispatch Inquiry</h3>
                        
                        <form onSubmit={addQuote}>
                          <div className="admin-input-group">
                            <label>Inquirer Name</label>
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="e.g. John Matthews" 
                              value={qfName} 
                              onChange={(e) => setQfName(e.target.value)} 
                              required 
                            />
                          </div>

                          <div className="admin-input-group">
                            <label>Inquiry Route</label>
                            <input 
                              type="text" 
                              className="admin-input" 
                              placeholder="e.g. Riyadh Airport to Marriott Hotel" 
                              value={qfRoute} 
                              onChange={(e) => setQfRoute(e.target.value)} 
                              required 
                            />
                          </div>

                          <div className="admin-input-group">
                            <label>Preferred Vehicle Fleet</label>
                            <select className="admin-select" value={qfVehicle} onChange={(e) => setQfVehicle(e.target.value)}>
                              <option value="GMC Yukon XL">GMC Yukon XL</option>
                              <option value="Mercedes V-Class">Mercedes V-Class (Premium Van)</option>
                              <option value="Cadillac Escalade (VIP)">Cadillac Escalade (VIP)</option>
                              <option value="Mercedes S-Class">Mercedes S-Class (Ultra Sedan)</option>
                            </select>
                          </div>

                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "1rem", marginBottom: "1.5rem" }}>
                            <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)" }}>Auto-Estimate Cost:</span>
                            <strong style={{ fontSize: "1.25rem", color: "var(--color-gold)" }}>{qfBasePrice} SAR</strong>
                          </div>

                          <button type="submit" className="btn-admin-gold" style={{ width: "100%" }}>
                            Save Quote Draft
                          </button>
                        </form>
                      </div>
                    </div>

                    {/* RECENT INQUIRIES & PENDING ORDERS */}
                    <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1.5rem" }}>
                      <div className="admin-card">
                        <h3 style={{ fontSize: "1.2rem", color: "#ffffff", marginBottom: "1rem" }}>Inbound Inquiries awaiting conversion</h3>
                        
                        <div className="admin-table-wrapper">
                          <table className="admin-table">
                            <thead>
                              <tr>
                                <th>Inquiry ID</th>
                                <th>Inquirer</th>
                                <th>Requested Route</th>
                                <th>Vehicle Class</th>
                                <th>Estimate Price</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              {quotes.map((q) => (
                                <tr key={q.id}>
                                  <td style={{ fontWeight: "bold", color: "var(--color-gold)" }}>{q.id}</td>
                                  <td>{q.clientName}</td>
                                  <td>{q.route}</td>
                                  <td>{q.vehicle}</td>
                                  <td style={{ fontWeight: 600 }}>{q.price} SAR</td>
                                  <td>
                                    <div style={{ display: "flex", gap: "0.5rem" }}>
                                      <button 
                                        className="btn-admin-gold" 
                                        style={{ padding: "0.35rem 0.75rem", fontSize: "0.8rem", borderRadius: "4px" }}
                                        onClick={() => convertQuoteToBooking(q)}
                                      >
                                        Approve Booking
                                      </button>
                                      <button 
                                        className="btn-admin-outline" 
                                        style={{ padding: "0.35rem 0.5rem", borderRadius: "4px" }}
                                        onClick={() => deleteQuote(q.id)}
                                      >
                                        <Trash2 size={14} />
                                      </button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. BOOKINGS MANAGEMENT TAB */}
                {activeTab === "bookings" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "2rem" }}>
                    
                    {/* BOOKINGS DATABASE LIST */}
                    <div className="admin-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <h3 style={{ fontSize: "1.2rem" }}>All Bookings</h3>
                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Showing {filteredBookings.length} matching rows</span>
                      </div>

                      <div className="admin-table-wrapper">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Ref ID</th>
                              <th>Passenger</th>
                              <th>Route</th>
                              <th>Vehicle</th>
                              <th>Date/Time</th>
                              <th>Fare</th>
                              <th>Status</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredBookings.map((b) => (
                              <tr key={b.id}>
                                <td style={{ fontWeight: "bold", color: "var(--color-gold)" }}>{b.id}</td>
                                <td>
                                  <div style={{ fontWeight: 500 }}>{b.clientName}</div>
                                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{b.clientPhone}</div>
                                </td>
                                <td style={{ fontSize: "0.85rem", maxWidth: "160px", overflow: "hidden", textOverflow: "ellipsis" }}>{b.route}</td>
                                <td style={{ fontSize: "0.85rem" }}>{b.vehicle}</td>
                                <td>
                                  <div style={{ fontSize: "0.85rem" }}>{b.date}</div>
                                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{b.time}</div>
                                </td>
                                <td style={{ fontWeight: 600 }}>{b.price} SAR</td>
                                <td>
                                  <select 
                                    className="admin-select"
                                    value={b.status} 
                                    onChange={(e) => updateBookingStatus(b.id, e.target.value)}
                                    style={{ 
                                      padding: "0.25rem 0.5rem", 
                                      fontSize: "0.8rem", 
                                      background: b.status === "Confirmed" ? "rgba(74, 222, 128, 0.1)" : b.status === "Pending" ? "rgba(251, 191, 36, 0.1)" : "rgba(255,255,255,0.05)",
                                      color: b.status === "Confirmed" ? "#4ade80" : b.status === "Pending" ? "#fbbf24" : "#ffffff",
                                      borderColor: "transparent",
                                      borderRadius: "6px"
                                    }}
                                  >
                                    <option value="Pending" style={{ background: "#111" }}>Pending</option>
                                    <option value="Confirmed" style={{ background: "#111" }}>Confirmed</option>
                                    <option value="Completed" style={{ background: "#111" }}>Completed</option>
                                    <option value="Cancelled" style={{ background: "#111" }}>Cancelled</option>
                                  </select>
                                </td>
                                <td>
                                  <div style={{ display: "flex", gap: "0.4rem" }}>
                                    <button 
                                      className="btn-admin-gold" 
                                      style={{ padding: "0.4rem 0.6rem", borderRadius: "6px" }}
                                      onClick={() => setActiveInvoice(b)}
                                      title="Generate Billing Invoice"
                                    >
                                      <FileText size={14} />
                                    </button>
                                    <button 
                                      className="btn-admin-danger" 
                                      style={{ padding: "0.4rem 0.6rem", borderRadius: "6px" }}
                                      onClick={() => deleteBooking(b.id)}
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* BOOKING REGISTRATION FORM */}
                    <div className="admin-card">
                      <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Register VIP Booking Manually</h3>
                      
                      <form onSubmit={addBooking}>
                        <div className="admin-input-group">
                          <label>Passenger Full Name</label>
                          <input type="text" className="admin-input" placeholder="e.g. Sheikh Khalid" value={bfName} onChange={(e) => setBfName(e.target.value)} required />
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                          <div className="admin-input-group">
                            <label>Email Address</label>
                            <input type="email" className="admin-input" placeholder="guest@domain.com" value={bfEmail} onChange={(e) => setBfEmail(e.target.value)} />
                          </div>
                          <div className="admin-input-group">
                            <label>Phone Number</label>
                            <input type="text" className="admin-input" placeholder="+966 50..." value={bfPhone} onChange={(e) => setBfPhone(e.target.value)} />
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                          <div className="admin-input-group">
                            <label>Service Mode</label>
                            <select className="admin-select" value={bfService} onChange={(e) => setBfService(e.target.value)}>
                              <option value="Airport Transfer">Airport Transfer</option>
                              <option value="Intercity Transfer">Intercity Transfer</option>
                              <option value="Hourly Hire">Hourly Hire</option>
                              <option value="Ziyarat Tour">Ziyarat Tour</option>
                            </select>
                          </div>

                          <div className="admin-input-group">
                            <label>Vehicle Model Selection</label>
                            <select className="admin-select" value={bfVehicle} onChange={(e) => setBfVehicle(e.target.value)}>
                              <option value="GMC Yukon XL">GMC Yukon XL</option>
                              <option value="Mercedes V-Class">Mercedes V-Class (VIP Van)</option>
                              <option value="Cadillac Escalade (VIP)">Cadillac Escalade (VIP)</option>
                              <option value="Mercedes S-Class">Mercedes S-Class (VIP Sedan)</option>
                            </select>
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "1rem" }}>
                          <div className="admin-input-group">
                            <label>Pickup Location</label>
                            <input type="text" className="admin-input" placeholder="JED Airport Terminal 1" value={bfPickup} onChange={(e) => setBfPickup(e.target.value)} required />
                          </div>
                          <div className="admin-input-group">
                            <label>Dropoff Location</label>
                            <input type="text" className="admin-input" placeholder="Makkah Clock Tower Hotel" value={bfDropoff} onChange={(e) => setBfDropoff(e.target.value)} required />
                          </div>
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                          <div className="admin-input-group">
                            <label>Transit Date</label>
                            <input type="date" className="admin-input" value={bfDate} onChange={(e) => setBfDate(e.target.value)} required />
                          </div>
                          <div className="admin-input-group">
                            <label>Pickup Time</label>
                            <input type="time" className="admin-input" value={bfTime} onChange={(e) => setBfTime(e.target.value)} />
                          </div>
                        </div>

                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1rem 0", borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: "1rem", marginBottom: "1.5rem" }}>
                          <span style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)" }}>Auto Calculated VIP Price:</span>
                          <strong style={{ fontSize: "1.5rem", color: "var(--color-gold)" }}>SAR {bfPrice}</strong>
                        </div>

                        <button type="submit" className="btn-admin-gold" style={{ width: "100%", padding: "1rem" }}>
                          Confirm Booking & Send Notification
                        </button>
                      </form>
                    </div>
                  </div>
                )}

                {/* 3. QUOTE CALCULATOR TAB */}
                {activeTab === "quote" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: "2.5rem" }}>
                    
                    {/* QUOTE SIMULATOR */}
                    <div className="admin-card">
                      <h3 style={{ fontSize: "1.3rem", marginBottom: "1.5rem" }}>Saudi Executive Route Pricing Estimator</h3>
                      
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.5rem" }}>
                        <div className="admin-input-group">
                          <label>Inbound Passenger Name</label>
                          <input type="text" className="admin-input" value={qfName} onChange={(e) => setQfName(e.target.value)} placeholder="Enter name" />
                        </div>

                        <div className="admin-input-group">
                          <label>Passenger Email Address</label>
                          <input type="email" className="admin-input" value={qfEmail} onChange={(e) => setQfEmail(e.target.value)} placeholder="guest@domain.com" />
                        </div>

                        <div className="admin-input-group" style={{ gridColumn: "span 2" }}>
                          <label>Detailed Route Commute</label>
                          <input type="text" className="admin-input" value={qfRoute} onChange={(e) => setQfRoute(e.target.value)} placeholder="e.g. Madinah Hotel to Jeddah Hilton" />
                        </div>

                        <div className="admin-input-group">
                          <label>Elite Vehicle Selection</label>
                          <select className="admin-select" value={qfVehicle} onChange={(e) => setQfVehicle(e.target.value)}>
                            <option value="GMC Yukon XL">GMC Yukon XL (Executive SUV)</option>
                            <option value="Mercedes V-Class">Mercedes V-Class (Premium Van)</option>
                            <option value="Cadillac Escalade (VIP)">Cadillac Escalade (VIP SUV)</option>
                            <option value="Mercedes S-Class">Mercedes S-Class (Ultra Luxury Sedan)</option>
                          </select>
                        </div>

                        <div className="admin-input-group">
                          <label>Custom Date</label>
                          <input type="date" className="admin-input" value={qfDate} onChange={(e) => setQfDate(e.target.value)} />
                        </div>
                      </div>

                      <div style={{ background: "rgba(201,162,39,0.05)", border: "1px solid rgba(201,162,39,0.2)", borderRadius: "12px", padding: "1.5rem", marginTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <h4 style={{ color: "#ffffff", fontWeight: 600, fontSize: "1.05rem" }}>Auto Calculated Elite Estimation</h4>
                          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.8rem" }}>Calculated for maximum hospitality, permits and tolls</p>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <span style={{ fontSize: "1.8rem", fontWeight: "bold", color: "var(--color-gold)", fontFamily: "var(--font-playfair)" }}>SAR {qfBasePrice}</span>
                          <span style={{ display: "block", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>All Fees Included</span>
                        </div>
                      </div>

                      <div style={{ marginTop: "2rem", display: "flex", gap: "1rem" }}>
                        <button className="btn-admin-outline" style={{ flexGrow: 1 }} onClick={() => {
                          setQfName(""); setQfRoute(""); setQfEmail("");
                        }}>Reset Fields</button>
                        <button className="btn-admin-gold" style={{ flexGrow: 1 }} onClick={addQuote}>
                          Save & Print Proposal Quote
                        </button>
                      </div>
                    </div>

                    {/* PRICING SHEET REFERENCE */}
                    <div className="admin-card">
                      <h3 style={{ fontSize: "1.2rem", marginBottom: "1.25rem" }}>Standard Pricing Sheet Rules</h3>
                      
                      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>Riyadh Local Transfer</span>
                          <strong style={{ color: "#ffffff" }}>SAR 500 - 700</strong>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>Jeddah to Makkah Transfer</span>
                          <strong style={{ color: "#ffffff" }}>SAR 800 - 1,200</strong>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>Makkah to Madinah Intercity</span>
                          <strong style={{ color: "#ffffff" }}>SAR 1,800 - 2,500</strong>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>Full Ziyarat Day Tour</span>
                          <strong style={{ color: "#ffffff" }}>SAR 1,200 - 1,800</strong>
                        </div>
                        <div style={{ borderBottom: "1px solid rgba(255,255,255,0.05)", paddingBottom: "0.75rem", display: "flex", justifyContent: "space-between" }}>
                          <span style={{ color: "rgba(255,255,255,0.6)" }}>Hourly Hires (per 8 hrs)</span>
                          <strong style={{ color: "#ffffff" }}>SAR 1,500</strong>
                        </div>
                      </div>

                      <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: "8px", padding: "1rem", marginTop: "2rem" }}>
                        <h4 style={{ fontSize: "0.9rem", color: "var(--color-gold)", marginBottom: "0.5rem" }}>Markup Rules Applied</h4>
                        <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", lineHeight: "1.5" }}>
                          * VIP Cadillac Escalade adds <strong>500 SAR</strong> surcharge.<br/>
                          * Mercedes V-Class adds <strong>300 SAR</strong> surcharge.<br/>
                          * Late-night transfers (22:00 to 05:00) contain automated 10% premium adjustments.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. CLIENTS CRM TAB */}
                {activeTab === "clients" && (
                  <div>
                    {/* CLIENT DETAILS EDIT MODAL IF ACTIVE */}
                    {editingClient && (
                      <div style={{ 
                        position: "fixed", 
                        top: 0, left: 0, right: 0, bottom: 0, 
                        background: "rgba(0,0,0,0.8)", 
                        zIndex: 200, 
                        display: "flex", 
                        alignItems: "center", 
                        justifyContent: "center",
                        padding: "1rem"
                      }}>
                        <div className="admin-card border-gold-glow" style={{ width: "100%", maxWidth: "500px" }}>
                          <h3 style={{ fontSize: "1.3rem", marginBottom: "1.5rem", color: "#ffffff" }}>Modify VIP Customer Profile</h3>
                          
                          <form onSubmit={saveClientDetails}>
                            <div className="admin-input-group">
                              <label>Client Name</label>
                              <input 
                                type="text" 
                                className="admin-input" 
                                value={editingClient.name} 
                                onChange={(e) => setEditingClient({ ...editingClient, name: e.target.value })} 
                                required 
                              />
                            </div>
                            
                            <div className="admin-input-group">
                              <label>Email Address</label>
                              <input 
                                type="email" 
                                className="admin-input" 
                                value={editingClient.email} 
                                onChange={(e) => setEditingClient({ ...editingClient, email: e.target.value })} 
                                required 
                              />
                            </div>

                            <div className="admin-input-group">
                              <label>Phone Number</label>
                              <input 
                                type="text" 
                                className="admin-input" 
                                value={editingClient.phone} 
                                onChange={(e) => setEditingClient({ ...editingClient, phone: e.target.value })} 
                                required 
                              />
                            </div>

                            <div className="admin-input-group">
                              <label>Private Preferences / Notes</label>
                              <textarea 
                                className="admin-input" 
                                rows={3} 
                                value={editingClient.notes || ""} 
                                onChange={(e) => setEditingClient({ ...editingClient, notes: e.target.value })} 
                                style={{ fontFamily: "inherit" }}
                              />
                            </div>

                            <div style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}>
                              <button type="button" className="btn-admin-outline" style={{ flexGrow: 1 }} onClick={() => setEditingClient(null)}>
                                Cancel
                              </button>
                              <button type="submit" className="btn-admin-gold" style={{ flexGrow: 1 }}>
                                Save Customer Profile
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    )}

                    <div className="admin-card">
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <h3 style={{ fontSize: "1.2rem" }}>VIP Clients CRM Database</h3>
                        <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)" }}>Registered High-Net-Worth Profile Files</span>
                      </div>

                      <div className="admin-table-wrapper">
                        <table className="admin-table">
                          <thead>
                            <tr>
                              <th>Client ID</th>
                              <th>Name</th>
                              <th>Contact Email</th>
                              <th>Phone Number</th>
                              <th>Total Rides</th>
                              <th>Revenue Volume</th>
                              <th>Special Directives & Preferences</th>
                              <th>Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {filteredClients.map((c) => (
                              <tr key={c.id}>
                                <td style={{ fontWeight: "bold", color: "var(--color-gold)" }}>{c.id}</td>
                                <td style={{ fontWeight: 600 }}>{c.name}</td>
                                <td>{c.email}</td>
                                <td>{c.phone}</td>
                                <td>
                                  <span style={{ background: "rgba(255,255,255,0.05)", padding: "0.25rem 0.6rem", borderRadius: "4px", fontSize: "0.85rem" }}>
                                    {c.rides} rides
                                  </span>
                                </td>
                                <td style={{ fontWeight: "bold", color: "var(--color-gold)" }}>SAR {c.spend.toLocaleString()}</td>
                                <td style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", maxWidth: "250px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                                  {c.notes || "None"}
                                </td>
                                <td>
                                  <div style={{ display: "flex", gap: "0.5rem" }}>
                                    <button 
                                      className="btn-admin-gold" 
                                      style={{ padding: "0.4rem 0.6rem", borderRadius: "6px" }}
                                      onClick={() => setEditingClient(c)}
                                    >
                                      <Edit size={14} />
                                    </button>
                                    <button 
                                      className="btn-admin-danger" 
                                      style={{ padding: "0.4rem 0.6rem", borderRadius: "6px" }}
                                      onClick={() => deleteClient(c.id)}
                                    >
                                      <Trash2 size={14} />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. LETTERHEAD DISPATCH TAB */}
                {activeTab === "letterhead" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2.5rem" }}>
                    
                    {/* DISPATCH EDITOR */}
                    <div className="admin-card">
                      <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Executive Letterhead Writer</h3>
                      
                      <div className="admin-input-group">
                        <label>Dispatch Date</label>
                        <input type="text" className="admin-input" value={letterDate} onChange={(e) => setLetterDate(e.target.value)} />
                      </div>

                      <div className="admin-input-group">
                        <label>Official Recipient details</label>
                        <textarea className="admin-input" rows={3} value={letterRecipient} onChange={(e) => setLetterRecipient(e.target.value)} style={{ fontFamily: "inherit" }} />
                      </div>

                      <div className="admin-input-group">
                        <label>Official Subject Header</label>
                        <input type="text" className="admin-input" value={letterSubject} onChange={(e) => setLetterSubject(e.target.value)} />
                      </div>

                      <div className="admin-input-group">
                        <label>Letter Body / Content Correspondence</label>
                        <textarea className="admin-input" rows={12} value={letterBody} onChange={(e) => setLetterBody(e.target.value)} style={{ fontFamily: "inherit", fontSize: "0.9rem" }} />
                      </div>

                      <button className="btn-admin-gold" style={{ width: "100%", marginTop: "1rem" }} onClick={() => window.print()}>
                        <Printer size={18} /> Print Official Letterhead
                      </button>
                    </div>

                    {/* DYNAMIC PAPER LOOK PRERENDER */}
                    <div>
                      <div className="letterhead-paper printable-area">
                        <div className="letterhead-header">
                          <div>
                            <div className="letterhead-title">CHAUFFEUR SERVICE KSA</div>
                            <div style={{ fontSize: "0.7rem", color: "#c9a227", letterSpacing: "3px", fontWeight: "bold", marginTop: "3px", fontFamily: "sans-serif" }}>
                              ROYAL AND VIP TRANSPORTATION AGENCY
                            </div>
                          </div>
                          
                          <div className="letterhead-contact">
                            Olaya Executive District, Riyadh<br/>
                            Tel: +966 11 9942700<br/>
                            support@chauffeurserviceksa.com
                          </div>
                        </div>

                        <div style={{ fontSize: "0.95rem", color: "#444", marginBottom: "2rem", fontFamily: "sans-serif" }}>
                          <strong>DATE:</strong> {letterDate}<br/>
                          <strong>SUBJECT:</strong> <span style={{ textDecoration: "underline" }}>{letterSubject}</span>
                        </div>

                        <div style={{ whiteSpace: "pre-line", fontSize: "1rem", fontFamily: "Times New Roman, serif", color: "#222", lineHeight: "1.7", flexGrow: 1 }}>
                          <strong>TO:</strong><br/>
                          {letterRecipient}<br/><br/>
                          {letterBody}
                        </div>

                        <div className="letterhead-footer">
                          KINGDOM OF SAUDI ARABIA | EXECUTIVE TRANSPORT MANAGEMENT BUREAU | LICENSED BY THE MINISTRY OF TRANSPORTATION
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. EMAIL MAILERS TAB */}
                {activeTab === "email" && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "2rem" }}>
                    
                    {/* EMAIL TEMPLATE VARIABLE CONTROLS */}
                    <div className="admin-card">
                      <h3 style={{ fontSize: "1.2rem", marginBottom: "1.5rem" }}>Mailer Template Controls</h3>
                      
                      <div className="admin-input-group">
                        <label>Select Template Scenario</label>
                        <select className="admin-select" value={emailTemplateType} onChange={(e) => setEmailTemplateType(e.target.value)}>
                          <option value="booking_confirmed">Booking Confirmed Notification</option>
                          <option value="otp_verification">Security Portal OTP Code</option>
                        </select>
                      </div>

                      <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "1.5rem", marginTop: "1rem" }}>
                        <h4 style={{ fontSize: "0.95rem", marginBottom: "1rem", color: "var(--color-gold)" }}>Dynamic Template Variables</h4>

                        {emailTemplateType === "booking_confirmed" ? (
                          <div>
                            <div className="admin-input-group">
                              <label>Auto-fill from active booking</label>
                              <select 
                                className="admin-select" 
                                defaultValue="" 
                                onChange={(e) => { if(e.target.value) triggerEmailPrefill(e.target.value); }}
                              >
                                <option value="" disabled>Select booking to auto-fill...</option>
                                {bookings.map(b => (
                                  <option key={b.id} value={b.id}>{b.id} - {b.clientName}</option>
                                ))}
                              </select>
                            </div>

                            <div className="admin-input-group">
                              <label>Recipient Passenger Name</label>
                              <input type="text" className="admin-input" value={emailClientName} onChange={(e) => setEmailClientName(e.target.value)} />
                            </div>

                            <div className="admin-input-group">
                              <label>Service Booking ID</label>
                              <input type="text" className="admin-input" value={emailBookingId} onChange={(e) => setEmailBookingId(e.target.value)} />
                            </div>

                            <div className="admin-input-group">
                              <label>Schedule Details</label>
                              <input type="text" className="admin-input" value={emailDateInfo} onChange={(e) => setEmailDateInfo(e.target.value)} />
                            </div>

                            <div className="admin-input-group">
                              <label>Route commute details</label>
                              <input type="text" className="admin-input" value={emailRouteInfo} onChange={(e) => setEmailRouteInfo(e.target.value)} />
                            </div>

                            <div className="admin-input-group">
                              <label>Grand Price Fare</label>
                              <input type="text" className="admin-input" value={emailPriceInfo} onChange={(e) => setEmailPriceInfo(e.target.value)} />
                            </div>
                          </div>
                        ) : (
                          <div>
                            <div className="admin-input-group">
                              <label>Generated One-Time Verification Code</label>
                              <input type="text" className="admin-input" value={emailOtpCode} onChange={(e) => setEmailOtpCode(e.target.value)} style={{ fontSize: "1.3rem", fontWeight: "bold", textAlign: "center", color: "var(--color-gold)", letterSpacing: "0.2em" }} />
                            </div>
                            <button className="btn-admin-outline" type="button" style={{ width: "100%" }} onClick={() => {
                              setEmailOtpCode(Math.floor(100000 + Math.random() * 900000).toString());
                            }}>
                              Generate New OTP Code
                            </button>
                          </div>
                        )}
                      </div>

                      <div style={{ marginTop: "2.5rem" }}>
                        <button className="btn-admin-gold" style={{ width: "100%" }} onClick={handleCopyEmailHTML}>
                          <Download size={18} /> Copy HTML Email Code
                        </button>
                        <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textAlign: "center", marginTop: "0.5rem" }}>
                          Copies high-compatibility inline-CSS HTML template directly to paste in HubSpot, Mailchimp, or SMTP scripts.
                        </p>
                      </div>
                    </div>

                    {/* EMAIL SIMULATION SCREEN PREVIEW */}
                    <div className="email-simulator">
                      <div className="email-header-bar">
                        <div style={{ display: "flex", gap: "6px" }}>
                          <div className="email-dot" style={{ background: "#ff5f56" }} />
                          <div className="email-dot" style={{ background: "#ffbd2e" }} />
                          <div className="email-dot" style={{ background: "#27c93f" }} />
                        </div>
                        <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>Preview Frame: Transactional Mailer</span>
                      </div>

                      <div className="email-body-preview">
                        {emailTemplateType === "booking_confirmed" ? (
                          <div className="email-markup-content">
                            <div className="email-hero-gold">
                              <span style={{ fontSize: "1.4rem", color: "#ffffff", letterSpacing: "2px", fontWeight: "bold", fontFamily: "var(--font-playfair)" }}>CHAUFFEUR SERVICE KSA</span>
                              <div style={{ fontSize: "0.6rem", color: "#c9a227", letterSpacing: "3px", marginTop: "4px", fontWeight: "bold" }}>ELITE ROYAL TRANSPORT</div>
                            </div>
                            <div style={{ padding: "2.5rem 2rem" }}>
                              <h2 style={{ fontSize: "1.2rem", color: "#111", fontWeight: "bold", margin: "0 0 1.5rem" }}>Dear {emailClientName},</h2>
                              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.6", margin: "0 0 1.5rem" }}>
                                Your premium ground transportation booking has been successfully confirmed. A dedicated professional chauffeur and immaculate executive vehicle are fully assigned to your schedule.
                              </p>
                              
                              <div style={{ background: "#f8f9fa", border: "1px solid #eee", borderRadius: "8px", padding: "1.25rem", marginBottom: "1.5rem" }}>
                                <table style={{ width: "100%", fontSize: "0.85rem", lineHeight: "1.8", color: "#222" }}>
                                  <tbody>
                                    <tr>
                                      <td style={{ fontWeight: "bold", color: "#888", width: "35%" }}>Booking ID:</td>
                                      <td style={{ fontWeight: "bold", color: "#c9a227" }}>{emailBookingId}</td>
                                    </tr>
                                    <tr>
                                      <td style={{ fontWeight: "bold", color: "#888" }}>Service Route:</td>
                                      <td>{emailRouteInfo}</td>
                                    </tr>
                                    <tr>
                                      <td style={{ fontWeight: "bold", color: "#888" }}>Schedule:</td>
                                      <td>{emailDateInfo}</td>
                                    </tr>
                                    <tr>
                                      <td style={{ fontWeight: "bold", color: "#888" }}>Assigned Class:</td>
                                      <td>Premium Executive SUV</td>
                                    </tr>
                                    <tr>
                                      <td style={{ fontWeight: "bold", color: "#888" }}>Total Price:</td>
                                      <td style={{ fontWeight: "bold" }}>{emailPriceInfo} (incl. VAT)</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>

                              <p style={{ fontSize: "0.85rem", color: "#666", lineHeight: "1.6", margin: "0 0 2rem" }}>
                                Your professional driver will contact you exactly 2 hours prior to arrival with tracking links and vehicle plate information.
                              </p>

                              <div style={{ textAlign: "center" }}>
                                <span style={{ background: "#c9a227", color: "#000", padding: "0.85rem 2rem", borderRadius: "50px", fontWeight: "bold", fontSize: "0.8rem", textTransform: "uppercase", display: "inline-block", letterSpacing: "1px" }}>
                                  Manage VIP Booking
                                </span>
                              </div>
                            </div>
                            <div style={{ background: "#f8f9fa", padding: "1.5rem", textAlign: "center", fontSize: "0.7rem", color: "#999", borderTop: "1px solid #eee" }}>
                              Kingdom of Saudi Arabia | VIP Corporate Desk<br/>
                              © 2026 Chauffeur Service KSA. All rights reserved.
                            </div>
                          </div>
                        ) : (
                          <div className="email-markup-content">
                            <div style={{ padding: "2.5rem 2rem" }}>
                              <h2 style={{ fontSize: "1.25rem", color: "#111", fontWeight: "bold", margin: "0 0 1rem" }}>Security Verification Code</h2>
                              <p style={{ fontSize: "0.9rem", color: "#555", lineHeight: "1.6", margin: "0 0 1.5rem" }}>
                                We received a request to access your premium chauffeur account. Please use the secure one-time verification code (OTP) below to authenticate:
                              </p>

                              <div style={{ border: "1px dashed #c9a227", background: "#fcfaf4", padding: "1.5rem", borderRadius: "8px", textAlign: "center", margin: "1.5rem 0" }}>
                                <span style={{ fontSize: "2rem", fontWeight: "bold", color: "#111", letterSpacing: "6px", fontFamily: "monospace" }}>{emailOtpCode}</span>
                              </div>

                              <p style={{ fontSize: "0.75rem", color: "#999", textAlign: "center", lineHeight: "1.5", margin: "0 0 2rem" }}>
                                This code is highly sensitive and will remain valid for exactly 10 minutes. Never share this code with anyone, including our support agents.
                              </p>

                              <p style={{ fontSize: "0.8rem", color: "#666", lineHeight: "1.5", borderTop: "1px solid #eee", paddingTop: "1rem" }}>
                                If you did not initiate this authentication request, please immediately contact our VIP emergency security desk.
                              </p>
                            </div>
                            <div style={{ background: "#0b0b0b", padding: "1rem", textAlign: "center", color: "#777", fontSize: "0.7rem", fontWeight: "bold" }}>
                              CHAUFFEUR SERVICE KSA | ROYAL PORTAL DEPT
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </main>
        </div>
      )}
    </div>
  );
}
