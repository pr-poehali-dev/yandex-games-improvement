import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Icon from '@/components/ui/icon';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid');

  const categories = ['Все', 'Action', 'RPG', 'Стратегии', 'Гонки', 'Шутер', 'Головоломки', 'Спорт', 'Симуляторы', 'Приключения'];

  const allGames = [
    { id: 1, title: 'Cosmic Quest', rating: 4.8, players: '2.3M', category: 'RPG', image: '/img/04cb90a0-d9db-4298-8355-f85335debe97.jpg', price: 'Бесплатно', tags: ['Онлайн', 'PvP', 'Кооп'] },
    { id: 2, title: 'Neon Racers', rating: 4.7, players: '1.8M', category: 'Гонки', image: '/img/fa9476b8-3197-49e0-b9ad-98438b3e89bf.jpg', price: '599₽', tags: ['Мультиплеер', 'Гонки'] },
    { id: 3, title: 'Space Battle', rating: 4.9, players: '3.1M', category: 'Шутер', image: '/img/57212004-91be-4ddc-b6f1-904db993d3aa.jpg', price: 'Бесплатно', tags: ['PvP', 'Космос'] },
    { id: 4, title: 'Puzzle Galaxy', rating: 4.6, players: '1.2M', category: 'Головоломки', image: '/placeholder.svg', price: '299₽', tags: ['Одиночная', 'Логика'] },
    { id: 5, title: 'Cyber Warriors', rating: 4.4, players: '980K', category: 'Action', image: '/placeholder.svg', price: 'Бесплатно', tags: ['Шутер', 'Киберпанк'] },
    { id: 6, title: 'Medieval Kingdoms', rating: 4.3, players: '750K', category: 'Стратегии', image: '/placeholder.svg', price: '899₽', tags: ['RTS', 'Средневековье'] },
    { id: 7, title: 'Ocean Explorer', rating: 4.5, players: '1.5M', category: 'Приключения', image: '/placeholder.svg', price: '450₽', tags: ['Открытый мир', 'Исследование'] },
    { id: 8, title: 'Football Manager 2025', rating: 4.7, players: '2.1M', category: 'Спорт', image: '/placeholder.svg', price: '1299₽', tags: ['Спорт', 'Менеджер'] }
  ];

  const topGames = allGames.slice(0, 4);

  const newGames = [
    { id: 5, title: 'Cyber City', rating: 4.5, category: 'Action', isNew: true },
    { id: 6, title: 'Magic Realms', rating: 4.4, category: 'RPG', isNew: true },
    { id: 7, title: 'Speed Arena', rating: 4.6, category: 'Спорт', isNew: true }
  ];

  const tournaments = [
    { id: 1, name: 'Cosmic Championship', prize: '50,000₽', participants: 1247, endDate: '15 часов' },
    { id: 2, name: 'Speed Masters', prize: '25,000₽', participants: 892, endDate: '2 дня' },
    { id: 3, name: 'Galaxy League', prize: '75,000₽', participants: 2156, endDate: '5 дней' }
  ];

  const achievements = [
    { id: 1, name: 'Первая победа', description: 'Выиграйте первую игру', progress: 100, reward: '100 XP' },
    { id: 2, name: 'Игровой марафон', description: 'Играйте 7 дней подряд', progress: 85, reward: '500 XP' },
    { id: 3, name: 'Чемпион турнира', description: 'Займите 1 место в турнире', progress: 60, reward: '1000 XP' }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-orbitron font-bold gaming-gradient bg-clip-text text-transparent">
                GameHub
              </h1>
              <nav className="hidden md:flex space-x-6">
                <Button variant="ghost" className="hover-scale">Главная</Button>
                <Button variant="ghost" className="hover-scale">Каталог</Button>
                <Button variant="ghost" className="hover-scale">Турниры</Button>
                <Button variant="ghost" className="hover-scale">Рейтинги</Button>
                <Button variant="ghost" className="hover-scale">Сообщество</Button>
              </nav>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Input
                  placeholder="Поиск игр..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10"
                />
                <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              </div>
              <Button className="gaming-gradient hover-scale font-orbitron">
                <Icon name="User" size={18} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="gaming-gradient py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-orbitron font-bold mb-6 animate-fade-in">
            Игровая Вселенная
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
            Откройте для себя тысячи увлекательных игр, участвуйте в турнирах и соревнуйтесь с игроками со всего мира
          </p>
          <div className="flex justify-center space-x-4 animate-scale-in">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 font-orbitron">
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Icon name="Trophy" size={20} className="mr-2" />
              Турниры
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-16">
        {/* Filters & Catalog */}
        <section>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
            <h3 className="text-3xl font-orbitron font-bold">Каталог игр</h3>
            
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Icon name="Filter" size={16} />
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Категория" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category} value={category.toLowerCase()}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Сортировка" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Популярные</SelectItem>
                  <SelectItem value="rating">По рейтингу</SelectItem>
                  <SelectItem value="new">Новинки</SelectItem>
                  <SelectItem value="price">По цене</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex items-center border rounded-lg">
                <Button
                  variant={viewMode === 'grid' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className="rounded-r-none"
                >
                  <Icon name="Grid3X3" size={16} />
                </Button>
                <Button
                  variant={viewMode === 'list' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className="rounded-l-none"
                >
                  <Icon name="List" size={16} />
                </Button>
              </div>
            </div>
          </div>

          {/* Games Tabs */}
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:grid-cols-4 mb-8">
              <TabsTrigger value="all">Все игры</TabsTrigger>
              <TabsTrigger value="free">Бесплатные</TabsTrigger>
              <TabsTrigger value="popular">Популярные</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}>
                {allGames.map((game, index) => (
                  viewMode === 'grid' ? (
                    <Card key={game.id} className="group hover-scale hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                      <div className="relative">
                        <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-t-lg" />
                        <div className="absolute top-2 right-2">
                          <Badge className="gaming-gradient-2">{game.category}</Badge>
                        </div>
                        <div className="absolute top-2 left-2">
                          <Badge variant="secondary" className="bg-black/70 text-white">
                            {game.price}
                          </Badge>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg font-orbitron">{game.title}</CardTitle>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {game.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-1">
                            <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                            <span className="font-semibold">{game.rating}</span>
                          </div>
                          <span className="text-sm text-muted-foreground">{game.players}</span>
                        </div>
                        <Button className="w-full gaming-gradient-3 hover-scale">
                          <Icon name="Play" size={16} className="mr-2" />
                          Играть
                        </Button>
                      </CardContent>
                    </Card>
                  ) : (
                    <Card key={game.id} className="group hover:shadow-lg transition-all duration-300">
                      <CardContent className="flex items-center p-4 space-x-4">
                        <img src={game.image} alt={game.title} className="w-20 h-20 object-cover rounded-lg flex-shrink-0" />
                        <div className="flex-grow min-w-0">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-orbitron font-bold text-lg">{game.title}</h4>
                              <p className="text-muted-foreground text-sm">{game.category}</p>
                              <div className="flex items-center space-x-4 mt-2">
                                <div className="flex items-center space-x-1">
                                  <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                                  <span className="text-sm">{game.rating}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{game.players}</span>
                                <Badge variant="secondary">{game.price}</Badge>
                              </div>
                            </div>
                            <Button className="gaming-gradient hover-scale flex-shrink-0">
                              <Icon name="Play" size={16} className="mr-2" />
                              Играть
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="free" className="mt-6">
              <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6' : 'space-y-4'}>
                {allGames.filter(game => game.price === 'Бесплатно').map((game, index) => (
                  <Card key={game.id} className="group hover-scale hover:shadow-lg transition-all duration-300 animate-fade-in">
                    <div className="relative">
                      <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="absolute top-2 right-2">
                        <Badge className="gaming-gradient-2">{game.category}</Badge>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-green-500 text-white">БЕСПЛАТНО</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-orbitron">{game.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{game.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{game.players}</span>
                      </div>
                      <Button className="w-full gaming-gradient hover-scale">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать бесплатно
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="popular" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {topGames.map((game, index) => (
                  <Card key={game.id} className="group hover-scale hover:shadow-lg transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="relative">
                      <img src={game.image} alt={game.title} className="w-full h-48 object-cover rounded-t-lg" />
                      <div className="absolute top-2 right-2">
                        <Badge className="gaming-gradient-2">{game.category}</Badge>
                      </div>
                      <div className="absolute top-2 left-2">
                        <Badge className="bg-red-500 text-white animate-pulse">ТОП</Badge>
                      </div>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg font-orbitron">{game.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{game.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{game.players}</span>
                      </div>
                      <Button className="w-full gaming-gradient-3 hover-scale">
                        <Icon name="Play" size={16} className="mr-2" />
                        Играть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newGames.map((game, index) => (
                  <Card key={game.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="font-orbitron">{game.title}</CardTitle>
                        {game.isNew && <Badge className="gaming-gradient animate-pulse-glow">Новая</Badge>}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between mb-4">
                        <Badge variant="outline">{game.category}</Badge>
                        <div className="flex items-center space-x-1">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span>{game.rating}</span>
                        </div>
                      </div>
                      <Button className="w-full gaming-gradient hover-scale">
                        <Icon name="Download" size={16} className="mr-2" />
                        Попробовать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Recommendations */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Рекомендации для вас</h3>
            <Button variant="outline" className="hover-scale">
              Настроить <Icon name="Settings" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allGames.filter(game => Math.random() > 0.5).slice(0, 6).map((game, index) => (
              <Card key={game.id} className="group hover-scale hover:shadow-lg transition-all duration-300 animate-fade-in border-2 border-primary/20" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative">
                  <img src={game.image} alt={game.title} className="w-full h-40 object-cover rounded-t-lg" />
                  <div className="absolute top-2 right-2">
                    <Badge className="gaming-gradient-2">{game.category}</Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-blue-500 text-white">ДЛЯ ВАС</Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg font-orbitron">{game.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {game.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span className="font-semibold">{game.rating}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{game.players}</span>
                  </div>
                  <div className="flex space-x-2">
                    <Button className="flex-1 gaming-gradient hover-scale">
                      <Icon name="Play" size={16} className="mr-2" />
                      Играть
                    </Button>
                    <Button variant="outline" size="icon" className="hover-scale">
                      <Icon name="Heart" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* New Games */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Новые игры</h3>
            <Button variant="outline" className="hover-scale">
              Все новинки <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newGames.map((game, index) => (
              <Card key={game.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.15}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron">{game.title}</CardTitle>
                    {game.isNew && <Badge className="gaming-gradient animate-pulse-glow">Новая</Badge>}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{game.category}</Badge>
                    <div className="flex items-center space-x-1">
                      <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                      <span>{game.rating}</span>
                    </div>
                  </div>
                  <Button className="w-full gaming-gradient hover-scale">
                    <Icon name="Download" size={16} className="mr-2" />
                    Попробовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tournaments */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Активные турниры</h3>
            <Button variant="outline" className="hover-scale">
              Все турниры <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tournament, index) => (
              <Card key={tournament.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="font-orbitron">{tournament.name}</CardTitle>
                    <Icon name="Trophy" size={24} className="text-yellow-400" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold gaming-gradient bg-clip-text text-transparent">
                        {tournament.prize}
                      </p>
                      <p className="text-sm text-muted-foreground">Призовой фонд</p>
                    </div>
                    
                    <div className="flex justify-between text-sm">
                      <span>Участников: {tournament.participants}</span>
                      <span>До конца: {tournament.endDate}</span>
                    </div>
                    
                    <Button className="w-full gaming-gradient-2 hover-scale">
                      <Icon name="Zap" size={16} className="mr-2" />
                      Участвовать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Social & Community */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Сообщество</h3>
            <Button variant="outline" className="hover-scale">
              Присоединиться <Icon name="Users" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="group hover-scale transition-all duration-300 bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-blue-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-500 rounded-lg">
                    <Icon name="Users" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-orbitron">Гильдии игроков</CardTitle>
                    <p className="text-sm text-muted-foreground">Найдите свою команду</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Присоединяйтесь к активным гильдиям и соревнуйтесь с другими командами</p>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span>12,543 участника</span>
                  <span>247 гильдий</span>
                </div>
                <Button className="w-full bg-blue-500 hover:bg-blue-600">
                  <Icon name="UserPlus" size={16} className="mr-2" />
                  Найти гильдию
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-scale transition-all duration-300 bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-green-500 rounded-lg">
                    <Icon name="MessageSquare" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-orbitron">Форум геймеров</CardTitle>
                    <p className="text-sm text-muted-foreground">Обсуждения и советы</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Делитесь опытом, обсуждайте стратегии и получайте помощь</p>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span>1,247 сообщений</span>
                  <span>89 онлайн</span>
                </div>
                <Button className="w-full bg-green-500 hover:bg-green-600">
                  <Icon name="MessageCircle" size={16} className="mr-2" />
                  Открыть форум
                </Button>
              </CardContent>
            </Card>

            <Card className="group hover-scale transition-all duration-300 bg-gradient-to-br from-orange-500/10 to-red-500/10 border-orange-500/20">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-orange-500 rounded-lg">
                    <Icon name="Calendar" size={24} className="text-white" />
                  </div>
                  <div>
                    <CardTitle className="font-orbitron">События</CardTitle>
                    <p className="text-sm text-muted-foreground">Турниры и мероприятия</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm mb-4">Не пропустите специальные события и масштабные турниры</p>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span>5 событий</span>
                  <span>следующее завтра</span>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  <Icon name="Calendar" size={16} className="mr-2" />
                  Посмотреть события
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Leaderboards */}
          <div className="bg-card/30 backdrop-blur-sm rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-2xl font-orbitron font-bold">Рейтинг игроков</h4>
              <Button variant="outline" size="sm">
                Полная таблица
              </Button>
            </div>
            
            <div className="space-y-4">
              {[
                { rank: 1, name: 'DragonSlayer', score: '15,247', level: 89, avatar: '🐉' },
                { rank: 2, name: 'SpaceCommander', score: '14,891', level: 85, avatar: '🚀' },
                { rank: 3, name: 'CyberNinja', score: '13,542', level: 82, avatar: '🤖' },
                { rank: 4, name: 'MagicMaster', score: '12,876', level: 78, avatar: '✨' },
                { rank: 5, name: 'RacingPro', score: '11,934', level: 76, avatar: '🏎️' }
              ].map((player) => (
                <div key={player.rank} className="flex items-center justify-between p-4 bg-card rounded-lg hover:bg-card/80 transition-colors">
                  <div className="flex items-center space-x-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      player.rank === 1 ? 'bg-yellow-500 text-black' :
                      player.rank === 2 ? 'bg-gray-400 text-black' :
                      player.rank === 3 ? 'bg-orange-600 text-white' :
                      'bg-primary/20 text-primary'
                    }`}>
                      {player.rank === 1 ? '🥇' : player.rank === 2 ? '🥈' : player.rank === 3 ? '🥉' : `#${player.rank}`}
                    </div>
                    <div className="text-2xl">{player.avatar}</div>
                    <div>
                      <h5 className="font-orbitron font-semibold">{player.name}</h5>
                      <p className="text-sm text-muted-foreground">Уровень {player.level}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{player.score}</div>
                    <div className="text-sm text-muted-foreground">очков</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-orbitron font-bold">Мои достижения</h3>
            <Button variant="outline" className="hover-scale">
              Мой профиль <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={achievement.id} className="group hover-scale transition-all duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="p-2 gaming-gradient rounded-lg">
                      <Icon name="Award" size={24} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="font-orbitron">{achievement.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Прогресс</span>
                      <span className="text-sm font-semibold">{achievement.progress}%</span>
                    </div>
                    <Progress value={achievement.progress} className="h-2" />
                    <div className="text-center">
                      <Badge className="gaming-gradient-3">{achievement.reward}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-16">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-orbitron font-bold text-xl mb-4 gaming-gradient bg-clip-text text-transparent">
                GameHub
              </h4>
              <p className="text-muted-foreground">
                Лучшая игровая платформа для геймеров всех уровней
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Игры</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">Популярные</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Новинки</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Бесплатные</Button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Сообщество</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">Турниры</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Рейтинги</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Форум</Button></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Button variant="link" className="p-0 h-auto">FAQ</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Помощь</Button></li>
                <li><Button variant="link" className="p-0 h-auto">Контакты</Button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 GameHub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;