import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Automação de Processos:',
    description:
      'Elimine tarefas repetitivas e foque no que importa com nossa automação inteligente.',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Análises de Dados em Tempo Real:',
    description:
      'Tome decisões informadas com insights baseados em dados, diretamente em seu dashboard.',
    icon: LockClosedIcon,
  },
  {
    name: 'Personalização Completa:',
    description:
      'Adaptamos nossas ferramentas às necessidades específicas do seu setor, seja você um criador de conteúdo ou uma startup de tecnologia',
    icon: ArrowPathIcon,
  },
  {
    name: 'Segurança Avançada:',
    description:
      'Segurança abrangente contra diversas ameaças à conta e está sempre em evolução para incluir novas proteções',
    icon: FingerPrintIcon,
  },
]

export default function FeatureOne() {
  return (
    <div className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 animate-eclipse-background-hero "></div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Funcionalidades que <span className="text-blue-700">Elevam</span> seu<br/> <span className="text-blue-700">Negócio</span> a Outro Nível!
          </h1>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-bold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700 ">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 font-normal">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}