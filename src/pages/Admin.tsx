import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/components/ui/use-toast';
import { Edit, Trash2, Plus, Check, X } from 'lucide-react';

interface Tractor {
    id: string;
    title: string;
    brand: string;
    model: string;
    year: number;
    hours: number;
    price: number;
    location: string;
    description: string | null;
    image_url: string | null;
    marktplaats_url: string | null;
    is_featured: boolean;
    is_available: boolean;
    is_sold: boolean;
}

const Admin = () => {
    const [tractors, setTractors] = useState<Tractor[]>([]);
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [editingTractor, setEditingTractor] = useState<Tractor | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { toast } = useToast();
    const navigate = useNavigate();

    // Check authentication on mount
    useEffect(() => {
        checkAuth();
    }, []);

    const checkAuth = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(!!session);
        if (!session) {
            navigate('/admin');
        }
    };

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            toast({
                title: "Login mislukt",
                description: error.message,
                variant: "destructive",
            });
        } else {
            setIsAuthenticated(true);
            fetchTractors();
        }
    };

    const handleLogout = async () => {
        await supabase.auth.signOut();
        setIsAuthenticated(false);
        navigate('/admin');
    };

    const fetchTractors = async () => {
        try {
            const { data, error } = await supabase
                .from('tractors')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) throw error;
            setTractors(data || []);
        } catch (error) {
            console.error('Error fetching tractors:', error);
            toast({
                title: "Fout bij ophalen tractoren",
                description: "Er is een fout opgetreden bij het ophalen van de tractoren.",
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleEdit = (tractor: Tractor) => {
        setEditingTractor(tractor);
        setIsDialogOpen(true);
    };

    const handleDelete = async (id: string) => {
        if (window.confirm('Weet je zeker dat je deze tractor wilt verwijderen?')) {
            try {
                const { error } = await supabase
                    .from('tractors')
                    .delete()
                    .eq('id', id);

                if (error) throw error;

                setTractors(tractors.filter(t => t.id !== id));
                toast({
                    title: "Tractor verwijderd",
                    description: "De tractor is succesvol verwijderd.",
                });
            } catch (error) {
                console.error('Error deleting tractor:', error);
                toast({
                    title: "Fout bij verwijderen",
                    description: "Er is een fout opgetreden bij het verwijderen van de tractor.",
                    variant: "destructive",
                });
            }
        }
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingTractor) return;

        try {
            const { error } = await supabase
                .from('tractors')
                .update({
                    title: editingTractor.title,
                    brand: editingTractor.brand,
                    model: editingTractor.model,
                    year: editingTractor.year,
                    hours: editingTractor.hours,
                    price: editingTractor.price,
                    location: editingTractor.location,
                    description: editingTractor.description,
                    image_url: editingTractor.image_url,
                    marktplaats_url: editingTractor.marktplaats_url,
                    is_featured: editingTractor.is_featured,
                    is_available: editingTractor.is_available,
                    is_sold: editingTractor.is_sold,
                })
                .eq('id', editingTractor.id);

            if (error) throw error;

            setTractors(tractors.map(t =>
                t.id === editingTractor.id ? editingTractor : t
            ));

            setIsDialogOpen(false);
            toast({
                title: "Tractor bijgewerkt",
                description: "De tractor is succesvol bijgewerkt.",
            });
        } catch (error) {
            console.error('Error updating tractor:', error);
            toast({
                title: "Fout bij bijwerken",
                description: "Er is een fout opgetreden bij het bijwerken van de tractor.",
                variant: "destructive",
            });
        }
    };

    const handleCreate = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!editingTractor) return;

        try {
            const { data, error } = await supabase
                .from('tractors')
                .insert([{
                    title: editingTractor.title,
                    brand: editingTractor.brand,
                    model: editingTractor.model,
                    year: editingTractor.year,
                    hours: editingTractor.hours,
                    price: editingTractor.price,
                    location: editingTractor.location,
                    description: editingTractor.description,
                    image_url: editingTractor.image_url,
                    marktplaats_url: editingTractor.marktplaats_url,
                    is_featured: editingTractor.is_featured,
                    is_available: editingTractor.is_available,
                    is_sold: editingTractor.is_sold,
                }])
                .select()
                .single();

            if (error) throw error;

            setTractors([...tractors, data]);
            setIsDialogOpen(false);
            toast({
                title: "Tractor toegevoegd",
                description: "De tractor is succesvol toegevoegd.",
            });
        } catch (error) {
            console.error('Error creating tractor:', error);
            toast({
                title: "Fout bij toevoegen",
                description: "Er is een fout opgetreden bij het toevoegen van de tractor.",
                variant: "destructive",
            });
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <Card className="w-full max-w-md">
                    <CardHeader>
                        <CardTitle className="text-center">Admin Login</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleLogin} className="space-y-4">
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="password">Wachtwoord</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <Button type="submit" className="w-full">
                                Inloggen
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        );
    }

    return (
        <div className="container mx-auto py-8">
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold">Tractor Beheer</h1>
                <div className="space-x-4">
                    <Button onClick={() => {
                        setEditingTractor({
                            id: '',
                            title: '',
                            brand: '',
                            model: '',
                            year: new Date().getFullYear(),
                            hours: 0,
                            price: 0,
                            location: 'Herpt',
                            description: '',
                            image_url: '',
                            marktplaats_url: '',
                            is_featured: false,
                            is_available: true,
                            is_sold: false,
                        });
                        setIsDialogOpen(true);
                    }}>
                        <Plus className="mr-2 h-4 w-4" />
                        Nieuwe Tractor
                    </Button>
                    <Button variant="outline" onClick={handleLogout}>
                        Uitloggen
                    </Button>
                </div>
            </div>

            {loading ? (
                <div className="text-center">Laden...</div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {tractors.map((tractor) => (
                        <Card key={tractor.id} className="relative">
                            {tractor.is_sold && (
                                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-10">
                                    <span className="text-white text-2xl font-bold transform -rotate-45">VERKOCHT</span>
                                </div>
                            )}
                            <CardHeader>
                                <CardTitle>{tractor.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-2">
                                    <p><strong>Merk:</strong> {tractor.brand}</p>
                                    <p><strong>Model:</strong> {tractor.model}</p>
                                    <p><strong>Bouwjaar:</strong> {tractor.year}</p>
                                    <p><strong>Uren:</strong> {tractor.hours}</p>
                                    <p><strong>Prijs:</strong> €{tractor.price.toLocaleString()}</p>
                                    <div className="flex space-x-2 mt-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleEdit(tractor)}
                                        >
                                            <Edit className="h-4 w-4 mr-2" />
                                            Bewerken
                                        </Button>
                                        <Button
                                            variant="destructive"
                                            size="sm"
                                            onClick={() => handleDelete(tractor.id)}
                                        >
                                            <Trash2 className="h-4 w-4 mr-2" />
                                            Verwijderen
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle>
                            {editingTractor?.id ? 'Tractor Bewerken' : 'Nieuwe Tractor'}
                        </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={editingTractor?.id ? handleSave : handleCreate} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="title">Titel</Label>
                                <Input
                                    id="title"
                                    value={editingTractor?.title || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, title: e.target.value } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="brand">Merk</Label>
                                <Input
                                    id="brand"
                                    value={editingTractor?.brand || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, brand: e.target.value } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="model">Model</Label>
                                <Input
                                    id="model"
                                    value={editingTractor?.model || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, model: e.target.value } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="year">Bouwjaar</Label>
                                <Input
                                    id="year"
                                    type="number"
                                    value={editingTractor?.year || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, year: parseInt(e.target.value) } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="hours">Uren</Label>
                                <Input
                                    id="hours"
                                    type="number"
                                    value={editingTractor?.hours || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, hours: parseInt(e.target.value) } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="price">Prijs</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    value={editingTractor?.price || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, price: parseFloat(e.target.value) } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="location">Locatie</Label>
                                <Input
                                    id="location"
                                    value={editingTractor?.location || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, location: e.target.value } : null)}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="image_url">Afbeelding URL</Label>
                                <Input
                                    id="image_url"
                                    value={editingTractor?.image_url || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, image_url: e.target.value } : null)}
                                />
                            </div>
                            <div>
                                <Label htmlFor="marktplaats_url">Marktplaats URL</Label>
                                <Input
                                    id="marktplaats_url"
                                    value={editingTractor?.marktplaats_url || ''}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, marktplaats_url: e.target.value } : null)}
                                />
                            </div>
                        </div>
                        <div>
                            <Label htmlFor="description">Beschrijving</Label>
                            <Textarea
                                id="description"
                                value={editingTractor?.description || ''}
                                onChange={(e) => setEditingTractor(prev => prev ? { ...prev, description: e.target.value } : null)}
                            />
                        </div>
                        <div className="flex space-x-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="is_featured"
                                    checked={editingTractor?.is_featured || false}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, is_featured: e.target.checked } : null)}
                                />
                                <Label htmlFor="is_featured">Uitgelicht</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="is_available"
                                    checked={editingTractor?.is_available || false}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, is_available: e.target.checked } : null)}
                                />
                                <Label htmlFor="is_available">Beschikbaar</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="is_sold"
                                    checked={editingTractor?.is_sold || false}
                                    onChange={(e) => setEditingTractor(prev => prev ? { ...prev, is_sold: e.target.checked } : null)}
                                />
                                <Label htmlFor="is_sold">Verkocht</Label>
                            </div>
                        </div>
                        <div className="flex justify-end space-x-2">
                            <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                                Annuleren
                            </Button>
                            <Button type="submit">
                                {editingTractor?.id ? 'Opslaan' : 'Toevoegen'}
                            </Button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Admin; 