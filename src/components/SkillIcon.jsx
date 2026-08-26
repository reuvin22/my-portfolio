import {
  SiReact,
  SiTypescript,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiNodedotjs,
  SiLaravel,
  SiFirebase,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiDocker,
  SiGit,
  SiGithub,
  SiPostman,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'
import { TbBucket, TbDatabase, TbGitCommit, TbSparkles } from 'react-icons/tb'

const iconMap = {
  react: SiReact,
  typescript: SiTypescript,
  nextjs: SiNextdotjs,
  vuejs: SiVuedotjs,
  angular: SiAngular,
  nodejs: SiNodedotjs,
  laravel: SiLaravel,
  firebase: SiFirebase,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  dynamodb: TbDatabase,
  aws: FaAws,
  gcp: SiGooglecloud,
  docker: SiDocker,
  git: SiGit,
  github: SiGithub,
  postman: SiPostman,
  ai: TbSparkles,
  codecommit: TbGitCommit,
  s3: TbBucket,
}

export default function SkillIcon({ name, ...props }) {
  const Cmp = iconMap[name]
  return Cmp ? <Cmp {...props} /> : null
}
