import { useEffect, useState } from "react";
import {
  Eye,
  EyeOff,
  Plus,
  Pencil,
  Trash2,
  Users,
  Newspaper,
  LogOut,
  X,
} from "lucide-react";

const API_BASE_URL = "http://localhost:8000";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string | null;
  bio: string;
  expertise: string[];
  education: string | null;
  start_year: number;
  experience_field: string;
  is_active: boolean;
  display_order: number;
}

interface Insight {
  id: number;
  title: string;
  description: string;
  image: string | null;
  category: string;
  date: string;
  location: string;
  is_active: boolean;
}

function getToken() {
  return localStorage.getItem("adminToken");
}

function request(url: string, options: RequestInit = {}) {
  const token = getToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  return fetch(url, { ...options, headers });
}

export function AdminPage() {
  const [token, setToken] = useState<string | null>(getToken);
  const [tab, setTab] = useState<"team" | "insights">("team");

  if (!token) {
    return <AuthScreen onLogin={setToken} />;
  }

  return (
    <div className="min-h-screen bg-[#f8e6d1]">
      <header className="bg-[#8C1E2D] text-white">
        <div className="mx-auto max-w-[95%] px-5 py-4 sm:px-8 lg:px-12 flex items-center justify-between">
          <h1 className="text-lg font-semibold tracking-[-.045em]">
            2ML Admin
          </h1>
          <button
            onClick={() => {
              localStorage.removeItem("adminToken");
              setToken(null);
            }}
            className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
          >
            <LogOut className="h-4 w-4" />
            Log out
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-[95%] px-5 py-10 sm:px-8 lg:px-12">
        <div className="mb-8 flex gap-2">
          <button
            onClick={() => setTab("team")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
              tab === "team"
                ? "bg-[#8C1E2D] text-white"
                : "bg-white text-[#8C1E2D] hover:bg-white/80"
            }`}
          >
            <Users className="h-4 w-4" />
            Team
          </button>
          <button
            onClick={() => setTab("insights")}
            className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
              tab === "insights"
                ? "bg-[#8C1E2D] text-white"
                : "bg-white text-[#8C1E2D] hover:bg-white/80"
            }`}
          >
            <Newspaper className="h-4 w-4" />
            Insights
          </button>
        </div>

        {tab === "team" ? <TeamManager /> : <InsightsManager />}
      </main>
    </div>
  );
}

function AuthScreen({ onLogin }: { onLogin: (token: string) => void }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      if (isLogin) {
        const res = await request(`${API_BASE_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Login failed");
        localStorage.setItem("adminToken", data.access_token);
        onLogin(data.access_token);
      } else {
        const res = await request(`${API_BASE_URL}/auth/register`, {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
        });
        const data = await res.json();
        if (!res.ok) throw new Error(data.detail || "Registration failed");
        setMessage("Registered. Please log in.");
        setIsLogin(true);
      }
    } catch (err: any) {
      setMessage(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f8e6d1] px-5">
      <div className="w-full max-w-md rounded-2xl border border-black/10 bg-white p-8 shadow-2xl">
        <h2 className="text-2xl font-semibold tracking-[-.045em] text-[#8C1E2D]">
          {isLogin ? "Admin Login" : "Register Admin"}
        </h2>
        <p className="mt-2 text-sm text-black/60">
          {isLogin ? "Sign in to manage content" : "Create an admin account"}
        </p>

        {message && (
          <div
            className={`mt-4 rounded-lg px-4 py-2 text-sm ${
              message.includes("failed") || message.includes("incorrect")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {!isLogin && (
            <div>
              <label className="mb-1 block text-sm font-semibold text-black/80">
                Username
              </label>
              <input
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
              />
            </div>
          )}
          <div>
            <label className="mb-1 block text-sm font-semibold text-black/80">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm font-semibold text-black/80">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/40 hover:text-[#8C1E2D]"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#8C1E2D] py-3 text-sm font-semibold text-white transition hover:bg-[#6e1822] disabled:opacity-60"
          >
            {loading ? "Please wait..." : isLogin ? "Sign in" : "Register"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-black/60">
          {isLogin ? "Need an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setMessage("");
            }}
            className="font-semibold text-[#8C1E2D] hover:underline"
          >
            {isLogin ? "Register" : "Log in"}
          </button>
        </p>
      </div>
    </div>
  );
}

function TeamManager() {
  const [items, setItems] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<TeamMember | null>(null);
  const [message, setMessage] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await request(`${API_BASE_URL}/team`);
      const data = await res.json();
      setItems(res.ok ? data : []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this team member?")) return;
    try {
      const res = await request(`${API_BASE_URL}/team/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      fetchItems();
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-[-.045em]">
          Team members
        </h2>
        <button
          onClick={() => {
            setEditing(null);
            setModal(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-[#8C1E2D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6e1822]"
        >
          <Plus className="h-4 w-4" />
          Add member
        </button>
      </div>

      {message && (
        <div className="mb-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-black/60">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-black/60">No team members found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold tracking-[-.025em]">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#8C1E2D]">{member.role}</p>
                  <p className="mt-1 text-xs text-black/50">
                    {member.is_active ? "Active" : "Inactive"}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      setEditing(member);
                      setModal(true);
                    }}
                    className="rounded-lg p-2 text-black/40 hover:bg-[#f8e6d1] hover:text-[#8C1E2D]"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="rounded-lg p-2 text-black/40 hover:bg-red-100 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <TeamFormModal
          item={editing}
          onClose={() => setModal(false)}
          onSaved={fetchItems}
          setMessage={setMessage}
        />
      )}
    </>
  );
}

function TeamFormModal({
  item,
  onClose,
  onSaved,
  setMessage,
}: {
  item: TeamMember | null;
  onClose: () => void;
  onSaved: () => void;
  setMessage: (msg: string) => void;
}) {
  const [form, setForm] = useState({
    name: item?.name || "",
    role: item?.role || "",
    image: item?.image || "",
    bio: item?.bio || "",
    expertise: item?.expertise?.join("\n") || "",
    education: item?.education || "",
    start_year: item?.start_year ?? new Date().getFullYear() - 10,
    experience_field: item?.experience_field || "",
    is_active: item?.is_active ?? true,
    display_order: item?.display_order ?? 0,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const payload = {
      ...form,
      image: form.image || null,
      education: form.education || null,
      expertise: form.expertise
        .split("\n")
        .map((s) => s.trim())
        .filter(Boolean),
    };

    try {
      const res = await request(
        item ? `${API_BASE_URL}/team/${item.id}` : `${API_BASE_URL}/team`,
        {
          method: item ? "PUT" : "POST",
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Save failed");
      onSaved();
      onClose();
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <Modal
      onClose={onClose}
      title={item ? "Edit team member" : "Add team member"}
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Name"
          value={form.name}
          onChange={(v) => setForm({ ...form, name: v })}
        />
        <TextInput
          label="Role"
          value={form.role}
          onChange={(v) => setForm({ ...form, role: v })}
        />
        <ImageUploader
          label="Image URL"
          value={form.image}
          onChange={(v) => setForm({ ...form, image: v })}
        />
        <TextArea
          label="Bio"
          value={form.bio}
          onChange={(v) => setForm({ ...form, bio: v })}
        />
        <TextArea
          label="Expertise (one per line)"
          value={form.expertise}
          onChange={(v) => setForm({ ...form, expertise: v })}
        />
        <TextInput
          label="Education"
          value={form.education}
          onChange={(v) => setForm({ ...form, education: v })}
        />
        <NumberInput
          label="Start Year"
          value={form.start_year}
          onChange={(v) => setForm({ ...form, start_year: v })}
        />
        <TextInput
          label="Experience Field"
          value={form.experience_field}
          onChange={(v) => setForm({ ...form, experience_field: v })}
        />
        <NumberInput
          label="Display Order"
          value={form.display_order}
          onChange={(v) => setForm({ ...form, display_order: v })}
        />
        <label className="flex items-center gap-2 text-sm text-black/80">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
          />
          Active
        </label>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-[#8C1E2D] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6e1822]"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-white px-6 py-2.5 text-sm font-semibold text-black/70 transition hover:bg-black/5"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

function InsightsManager() {
  const [items, setItems] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState(false);
  const [editing, setEditing] = useState<Insight | null>(null);
  const [message, setMessage] = useState("");

  const fetchItems = async () => {
    setLoading(true);
    try {
      const res = await request(`${API_BASE_URL}/insights`);
      const data = await res.json();
      setItems(res.ok ? data : []);
    } catch {
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this insight?")) return;
    try {
      const res = await request(`${API_BASE_URL}/insights/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Delete failed");
      fetchItems();
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-semibold tracking-[-.045em]">Insights</h2>
        <button
          onClick={() => {
            setEditing(null);
            setModal(true);
          }}
          className="flex items-center gap-2 rounded-lg bg-[#8C1E2D] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#6e1822]"
        >
          <Plus className="h-4 w-4" />
          Add insight
        </button>
      </div>

      {message && (
        <div className="mb-4 rounded-lg bg-red-100 px-4 py-2 text-sm text-red-700">
          {message}
        </div>
      )}

      {loading ? (
        <p className="text-black/60">Loading...</p>
      ) : items.length === 0 ? (
        <p className="text-black/60">No insights found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((insight) => (
            <div
              key={insight.id}
              className="rounded-2xl border border-black/10 bg-white p-5 transition hover:shadow-lg"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold tracking-[-.025em]">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-[#8C1E2D]">{insight.category}</p>
                  <p className="mt-1 text-xs text-black/50">
                    {insight.date} • {insight.location}
                  </p>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => {
                      setEditing(insight);
                      setModal(true);
                    }}
                    className="rounded-lg p-2 text-black/40 hover:bg-[#f8e6d1] hover:text-[#8C1E2D]"
                  >
                    <Pencil className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(insight.id)}
                    className="rounded-lg p-2 text-black/40 hover:bg-red-100 hover:text-red-600"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <InsightFormModal
          item={editing}
          onClose={() => setModal(false)}
          onSaved={fetchItems}
          setMessage={setMessage}
        />
      )}
    </>
  );
}

function InsightFormModal({
  item,
  onClose,
  onSaved,
  setMessage,
}: {
  item: Insight | null;
  onClose: () => void;
  onSaved: () => void;
  setMessage: (msg: string) => void;
}) {
  const [form, setForm] = useState({
    title: item?.title || "",
    description: item?.description || "",
    image: item?.image || "",
    category: item?.category || "",
    date: item?.date || "",
    location: item?.location || "",
    is_active: item?.is_active ?? true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const payload = {
      ...form,
      image: form.image || null,
    };

    try {
      const res = await request(
        item
          ? `${API_BASE_URL}/insights/${item.id}`
          : `${API_BASE_URL}/insights`,
        {
          method: item ? "PUT" : "POST",
          body: JSON.stringify(payload),
        },
      );
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Save failed");
      onSaved();
      onClose();
    } catch (err: any) {
      setMessage(err.message);
    }
  };

  return (
    <Modal onClose={onClose} title={item ? "Edit insight" : "Add insight"}>
      <form onSubmit={handleSubmit} className="space-y-4">
        <TextInput
          label="Title"
          value={form.title}
          onChange={(v) => setForm({ ...form, title: v })}
        />
        <TextArea
          label="Description"
          value={form.description}
          onChange={(v) => setForm({ ...form, description: v })}
        />
        <ImageUploader
          label="Image URL"
          value={form.image}
          onChange={(v) => setForm({ ...form, image: v })}
        />
        <TextInput
          label="Category"
          value={form.category}
          onChange={(v) => setForm({ ...form, category: v })}
        />
        <TextInput
          label="Date"
          value={form.date}
          onChange={(v) => setForm({ ...form, date: v })}
        />
        <TextInput
          label="Location"
          value={form.location}
          onChange={(v) => setForm({ ...form, location: v })}
        />
        <label className="flex items-center gap-2 text-sm text-black/80">
          <input
            type="checkbox"
            checked={form.is_active}
            onChange={(e) => setForm({ ...form, is_active: e.target.checked })}
          />
          Active
        </label>
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="rounded-lg bg-[#8C1E2D] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6e1822]"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-black/10 bg-white px-6 py-2.5 text-sm font-semibold text-black/70 transition hover:bg-black/5"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
}

function ImageUploader({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState("");

  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);
    setError("");
    const formData = new FormData();
    formData.append("file", file);
    const token = getToken();
    try {
      const res = await fetch(`${API_BASE_URL}/upload`, {
        method: "POST",
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.detail || "Upload failed");
      onChange(`${API_BASE_URL}${data.url}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-black/80">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://..."
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
      />
      <div className="mt-2 flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="text-sm text-black/70"
        />
        <button
          type="button"
          onClick={handleUpload}
          disabled={!file || uploading}
          className="rounded-lg bg-[#8C1E2D] px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-[#6e1822] disabled:opacity-50"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}

function Modal({
  onClose,
  title,
  children,
}: {
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5">
      <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-[-.045em] text-[#8C1E2D]">
            {title}
          </h3>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-black/40 hover:bg-[#f8e6d1] hover:text-[#8C1E2D]"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

function TextInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-black/80">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
      />
    </div>
  );
}

function NumberInput({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-black/80">
        {label}
      </label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <label className="mb-1 block text-sm font-semibold text-black/80">
        {label}
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={4}
        className="w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-sm focus:border-[#8C1E2D] focus:outline-none"
      />
    </div>
  );
}
