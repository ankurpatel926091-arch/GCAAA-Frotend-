import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainLayout } from '@/layouts/MainLayout';
import { HomePage } from '@/pages/HomePage';

const AboutPage = lazy(() => import('@/pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const EventsPage = lazy(() => import('@/pages/EventsPage').then((m) => ({ default: m.EventsPage })));
const CommitteePage = lazy(() => import('@/pages/CommitteePage').then((m) => ({ default: m.CommitteePage })));
const GalleryPage = lazy(() => import('@/pages/GalleryPage').then((m) => ({ default: m.GalleryPage })));
const ContactPage = lazy(() => import('@/pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const AlumniRegistrationPage = lazy(() => import('@/pages/AlumniRegistrationPage').then((m) => ({ default: m.AlumniRegistrationPage })));
const AlumniDataListPage = lazy(() => import('@/pages/AlumniDataListPage').then((m) => ({ default: m.AlumniDataListPage })));
const RegisteredMembersPage = lazy(() => import('@/pages/RegisteredMembersPage').then((m) => ({ default: m.RegisteredMembersPage })));
const PublicationsPage = lazy(() => import('@/pages/PublicationsPage').then((m) => ({ default: m.PublicationsPage })));
const BlogPage = lazy(() => import('@/pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogDetailsPage = lazy(() => import('@/pages/BlogDetailsPage').then((m) => ({ default: m.BlogDetailsPage })));
const ElectionNominationPage = lazy(() => import('@/pages/ElectionNominationPage').then((m) => ({ default: m.ElectionNominationPage })));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const AppRoutes = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="committee" element={<CommitteePage />} />
          <Route path="committee/:section" element={<CommitteePage />} />
          <Route path="registration" element={<AlumniRegistrationPage />} />
          <Route path="alumni-registration" element={<AlumniRegistrationPage />} />
          <Route path="election-nomination" element={<ElectionNominationPage />} />
          <Route path="nomination-form" element={<ElectionNominationPage />} />
          <Route path="election" element={<ElectionNominationPage />} />
          <Route path="alumni-data-list" element={<AlumniDataListPage />} />
          <Route path="registered-members" element={<RegisteredMembersPage />} />
          <Route path="members-list" element={<RegisteredMembersPage />} />
          <Route path="publications" element={<PublicationsPage />} />
          <Route path="resources" element={<PublicationsPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:id" element={<BlogDetailsPage />} />
          <Route path="blogs" element={<BlogPage />} />
          <Route path="blogs/:id" element={<BlogDetailsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
