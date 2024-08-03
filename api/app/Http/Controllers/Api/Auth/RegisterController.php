<?php

namespace App\Http\Controllers\Api\Auth;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\Api\Auth\RegisterRequest;

class RegisterController extends Controller
{
    public function store(RegisterRequest $request)
    {
        // Valider les données de la requête
        $validated = $request->validated();

        // Hasher le mot de passe de l'utilisateur
        $validated['password'] = Hash::make($validated['password']);

        // Vérifier si une image a été téléchargée
        if ($request->hasFile('image')) {

            // Stocker l'image dans le dossier de stockage 'images' du disque 'public'
            $validated['image'] = $request->file('image')->store('images', 'public');
        }


        // Créer un nouvel utilisateur
        $user = User::create($validated);

        // Retourner une réponse JSON avec l'utilisateur créé
        return response()->json([
            'user' => $user,
            'message' => 'User a été créé avec succès.'
        ], 201);
    }
}