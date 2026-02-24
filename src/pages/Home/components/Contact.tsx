import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import emailjs from '@emailjs/browser';
import { FaWhatsapp } from 'react-icons/fa';
import { FiGithub, FiInstagram, FiLinkedin, FiMail, FiMessageSquare, FiUser } from 'react-icons/fi';
import { Button } from '@/components/ui/button';
import { FormField } from '@/components/ui/form-field';
import { TitleSection } from '@/components/TitleSection';
import { IconBox } from '@/components/IconBox';
import { getContactFormSchema, type ContactFormData } from '@/schemas/contact';
import { supabase } from '@/lib/supabase';
import { PROFILE } from '@/data/profile';
import { sectionMotion } from '@/utils';
import { HiOutlineMail } from 'react-icons/hi';

const EMAILJS_SERVICE = 'portfolio';
const EMAILJS_TEMPLATE = 'template_n0u079c';
const EMAILJS_PUBLIC_KEY = 'user_LC00qXgbGQyLouXWSJkzu';

export function Contact() {
  const { t } = useTranslation();
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormData>({
    resolver: zodResolver(getContactFormSchema(t)),
    defaultValues: { name: '', email: '', message: '' },
  });

  async function onSubmit(data: ContactFormData) {
    try {
      if (supabase) {
        const { error } = await supabase.from('contact_submissions').insert({ name: data.name, email: data.email, message: data.message });
        if (error) throw error;
      }
      try {
        await emailjs.send(EMAILJS_SERVICE, EMAILJS_TEMPLATE, { name: data.name, email: data.email, message: data.message }, EMAILJS_PUBLIC_KEY);
      } catch {
        if (!supabase) throw new Error('Falha ao enviar e-mail.');
      }
      alert('Mensagem enviada com sucesso!');
      reset();
    } catch (err) {
      alert(err instanceof Error ? err.message : 'Erro ao enviar. Tente novamente.');
    }
  }

  return (
    <motion.section id="contact" className="flex flex-col items-center gap-14 max-md:flex-wrap" {...sectionMotion}>
      <TitleSection icon={<HiOutlineMail className="w-12 h-12 text-button" />} title={t('contact.title')} caption={t('contact.caption')} />
      <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 max-md:w-full flex flex-col items-center justify-center rounded-lg gap-10 py-12 px-8 bg-surface border border-border">
        <div className="w-full flex flex-col items-center gap-4">
          <FormField placeholder={t('contact.placeholders.name')} icon={<FiUser className="w-5 h-5" />} {...register('name')} error={errors.name?.message} />
          <FormField type="email" placeholder={t('contact.placeholders.email')} icon={<FiMail className="w-5 h-5" />} {...register('email')} error={errors.email?.message} />
          <FormField placeholder={t('contact.placeholders.message')} isTextArea icon={<FiMessageSquare className="w-5 h-5" />} {...register('message')} error={errors.message?.message} />
        </div>
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? t('contact.submitting') : t('contact.submit')}</Button>
        <div className="flex items-center gap-8">
          <IconBox alt="" href={PROFILE.social.github}><FiGithub className="icon" /></IconBox>
          <IconBox alt="" href={PROFILE.social.linkedin}><FiLinkedin className="icon" /></IconBox>
          <IconBox alt="" href={PROFILE.social.instagram}><FiInstagram className="icon" /></IconBox>
          <IconBox alt="" href={PROFILE.social.whatsapp}><FaWhatsapp className="icon" /></IconBox>
        </div>
      </form>
    </motion.section>
  );
}
